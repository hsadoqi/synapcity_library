import { createStore, StoreApi, useStore } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'
import {
    Library,
    libraryData,
    notebooksData,
    defaultLibrary,
} from '@/types/libraryData'
import { ColorShade } from '@/types/styling'
import { notebookStore } from './notebook-store'
import colors from 'tailwindcss/colors'

export type LibraryState = {
    libraries: Library[]
    filteredLibraries: Library[]
    selectedLibrary: Library | null
    defaultLibrary?: Library
    isSidebarOpen: boolean
}

export type LibraryActions = {
    setLibrary: (library: Library) => void
    setActiveLibraryById: (libraryId: string) => void
    setDefaultLibrary: () => void
    loadLibraries: (libraries?: Library[]) => void
    filterLibraries: (searchQuery: string) => void
    addLibrary: (library: Library) => void
    archiveLibrary: () => void
    restoreLibrary: () => void
    updateLibrary: (library: Partial<Library>) => void
    setSidebarOpen: (isOpen: boolean) => void
    toggleSidebar: () => void
}

export type LibraryStore = LibraryState & LibraryActions

export const libraryStore = createStore<LibraryStore>()(
    subscribeWithSelector((set) => ({
        isSidebarOpen: false,
        setSidebarOpen: (isOpen) => set({ isSidebarOpen: isOpen }),
        toggleSidebar: () =>
            set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
        libraries: [],
        filteredLibraries: [],
        selectedLibrary: null,
        defaultLibrary,
        setLibrary: (library: Library | null) =>
            set({ selectedLibrary: library }),
        setActiveLibraryById: (libraryId: string) => {
            set((state) => {
                if (state.libraries) {
                    const foundLibrary = state.libraries.find(
                        (library) => library.id === libraryId,
                    )
                    return { selectedLibrary: foundLibrary }
                } else {
                    return { selectedLibrary: defaultLibrary }
                }
            })
        },
        setDefaultLibrary: () => set({ selectedLibrary: defaultLibrary }),
        loadLibraries: (libraries?: Library[]) =>
            set((state) => {
                let updatedLibraries: Library[]

                if (libraries) {
                    updatedLibraries = libraries
                } else {
                    updatedLibraries = libraryData
                }
                return {
                    libraries: updatedLibraries,
                    filteredLibraries: updatedLibraries,
                    selectedLibrary:
                        state.selectedLibrary ??
                        updatedLibraries.find((library) => library.default) ??
                        defaultLibrary,
                }
            }),

        filterLibraries: (searchQuery: string) => {
            set((state) => {
                if (!searchQuery) {
                    return { filteredLibraries: state.libraries }
                }

                return {
                    filteredLibraries: state.libraries.filter((library) =>
                        library.name
                            .toLowerCase()
                            .includes(searchQuery.toLowerCase()),
                    ),
                }
            })
        },
        addLibrary: (library: Library) =>
            set((state) => ({ libraries: [...state.libraries, library] })),
        archiveLibrary: () =>
            set((state) => {
                if (state.selectedLibrary) {
                    const libraries = state.libraries.map((library) =>
                        library.id === state.selectedLibrary?.id
                            ? { ...library, isArchived: true }
                            : library,
                    )
                    return {
                        libraries,
                        selectedLibrary: {
                            ...state.selectedLibrary,
                            isArchived: true,
                        },
                        filteredLibraries: libraries,
                    }
                }
                return state
            }),
        restoreLibrary: () =>
            set((state) => {
                if (state.selectedLibrary) {
                    const libraries = state.libraries.map((library) =>
                        library.id === state.selectedLibrary?.id
                            ? { ...library, isArchived: false }
                            : library,
                    )
                    return {
                        libraries,
                        selectedLibrary: {
                            ...state.selectedLibrary,
                            isArchived: false,
                        },
                        filteredLibraries: libraries,
                    }
                }
                return state
            }),
        updateLibrary: (updates: Partial<Library>) =>
            set((state) => {
                if (state.selectedLibrary) {
                    const updatedLibrary = {
                        ...state.selectedLibrary,
                        ...updates,
                    }
                    const libraries = state.libraries.map((library) =>
                        library.id === updatedLibrary.id
                            ? updatedLibrary
                            : library,
                    )
                    return {
                        libraries,
                        selectedLibrary: updatedLibrary,
                        filteredLibraries: libraries,
                    }
                }
                return state
            }),
    })),
)

const createBoundedUseStore = ((store) => (selector) =>
    useStore(store, selector)) as <S extends StoreApi<unknown>>(
    store: S,
) => {
    (): ExtractState<S>
    <T>(selector: (state: ExtractState<S>) => T): T
}

type ExtractState<S> = S extends { getState: () => infer X } ? X : never

export const useLibraryStore = createBoundedUseStore(libraryStore)

libraryStore.subscribe(
    (state) => state.selectedLibrary,
    (selectedLibrary) => {
        if (selectedLibrary) {
            const { selectedLibrary } = libraryStore.getState()
            const { setNotebook, loadNotebooks } = notebookStore.getState()
            const notebookIds = selectedLibrary?.notebooks?.map(
                (notebook) => notebook.id,
            )
            const notebooks = notebooksData.filter((notebook) =>
                notebookIds?.includes(notebook.id),
            )
            const selectedNotebook = notebookStore.getState().selectedNotebook
            const firstNotebook = notebooks[0]
            if (
                !selectedNotebook ||
                (!notebookIds?.includes(selectedNotebook.id) &&
                    !selectedLibrary?.default)
            ) {
                setNotebook(firstNotebook)
                loadNotebooks(notebooks)
            } else {
                loadNotebooks(notebooksData)
            }

            const libraryColor = selectedLibrary?.color as keyof typeof colors
            if (colors[libraryColor]) {
                const shades: ColorShade[] = [
                    50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
                ]

                shades.forEach((shade) => {
                    const cssVar = `--active-${shade}`
                    const colorValue = colors[libraryColor][shade]
                    if (colorValue) {
                        document.documentElement.style.setProperty(
                            cssVar,
                            colorValue,
                        )
                    }
                })
            }
        } else {
            notebookStore.getState().loadNotebooks(notebooksData)
            const defaultColors = {
                '50': '#f3f4f6',
                '100': '#e5e7eb',
                '200': '#d1d5db',
                '300': '#9ca3af',
                '400': '#6b7280',
                '500': '#4b5563',
                '600': '#374151',
                '700': '#1f2937',
                '800': '#111827',
                '900': '#0f172a',
                '950': '#0a0e1a',
            }
            Object.entries(defaultColors).forEach(([shade, color]) => {
                document.documentElement.style.setProperty(
                    `--active-${shade}`,
                    color,
                )
            })
        }
    },
)
