import { createStore, StoreApi, useStore } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'
import { Library, Notebook, Note } from '@/types/libraryData'
import { Color, ColorShade } from '@/types/styling'
import transformedLibraries from '@/lib/validateLibraries'
import { notebookStore } from './notebook-store'
import colors from 'tailwindcss/colors'

export type DefaultNotebookType = Notebook & { default: boolean }

const defaultNotebook: Notebook & { default: boolean } = {
    id: '0',
    name: 'Master Notebook',
    shade: 500,
    icon: 'Combine',
    tags: [],
    notes: [] as Note[],
    isStarred: false,
    isArchived: false,
    isDeleted: false,
    default: true,
    libraryId: '0',
    createdAt: new Date('2025-01-02'),
    updatedAt: new Date('2025-01-04'),
    lastAccessedAt: new Date('2025-01-10'),
}

const defaultLibrary: Library & { default: boolean } = {
    id: '0',
    name: 'Master Library',
    color: 'neutral' as Color,
    icon: 'Combine' as string,
    tags: [],
    notebooks: [
        defaultNotebook,
        ...transformedLibraries.flatMap((library) => library.notebooks),
    ],
    isStarred: false,
    isArchived: false,
    isDeleted: false,
    default: true,
    createdAt: new Date('2025-01-02'),
    updatedAt: new Date('2025-01-04'),
    lastAccessedAt: new Date('2025-01-10'),
}

export type LibraryState = {
    libraries: Library[]
    filteredLibraries: Library[]
    selectedLibrary: Library | null
    defaultLibrary: Library
    isSidebarOpen: boolean
}

export type LibraryActions = {
    setLibrary: (library: Library) => void
    setActiveLibraryById: (libraryId: string) => void
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
        setLibrary: (library: Library) => set({ selectedLibrary: library }),
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
        loadLibraries: (libraries) => {
            set((state) => {
                if (!libraries) {
                    const updatedLibraries = [
                        defaultLibrary,
                        ...transformedLibraries,
                    ]
                    const notebooks = [...defaultLibrary.notebooks]

                    if (!state.selectedLibrary) {
                        notebookStore.getState().loadNotebooks(notebooks)
                    }

                    return {
                        libraries: updatedLibraries,
                        defaultLibrary: {
                            ...defaultLibrary,
                            notebooks,
                        },
                        filteredLibraries: updatedLibraries,
                    }
                }

                return state // Ensure function always returns state
            })
        },
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
        const { libraries } = libraryStore.getState()
        console.log('subscribe actions', selectedLibrary, libraries)
        if (selectedLibrary) {
            const selectedNotebook = notebookStore.getState().selectedNotebook
            if (!selectedNotebook) {
                notebookStore
                    .getState()
                    .setNotebook(selectedLibrary.notebooks[0])
            }
            notebookStore.getState().loadNotebooks(selectedLibrary.notebooks)

            const libraryColor = selectedLibrary.color as keyof typeof colors
            if (colors[libraryColor]) {
                const shades: ColorShade[] = [
                    50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
                ]

                shades.forEach((shade) => {
                    const cssVar = `--active-${shade}`
                    const colorValue = colors[libraryColor][shade] // Get Tailwind color value
                    if (colorValue) {
                        document.documentElement.style.setProperty(
                            cssVar,
                            colorValue,
                        )
                    }
                })
            }
        } else {
            console.log('all baby', selectedLibrary, libraries)
            const allNotebooks = libraries.flatMap(
                (library) => library.notebooks,
            )
            notebookStore.getState().loadNotebooks(allNotebooks)
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
