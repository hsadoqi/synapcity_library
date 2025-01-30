import { createStore, StoreApi, useStore } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'
import { Library, Notebook, Note } from '@/types/libraryData'
import { Color } from '@/types/styling'
import transformedLibraries from '@/lib/validateLibraries'
import { notebookStore } from './notebook-store'

export type DefaultNotebookType = Notebook & { default: boolean }

const defaultNotebook: Notebook & { default: boolean } = {
    id: '0',
    name: 'Notes',
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
    name: 'All Notebooks',
    color: 'neutral' as Color,
    icon: 'Combine',
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
        loadLibraries: (libraries) => {
            if (!libraries) {
                const updatedLibraries = [
                    defaultLibrary,
                    ...transformedLibraries,
                ]
                const notebooks = [...defaultLibrary.notebooks]

                set({
                    libraries: updatedLibraries,
                    defaultLibrary: {
                        ...defaultLibrary,
                        notebooks,
                    },
                    filteredLibraries: updatedLibraries,
                })

                notebookStore.getState().loadNotebooks(notebooks)
            }
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

        if (selectedLibrary) {
            notebookStore.getState().loadNotebooks(selectedLibrary.notebooks)
        } else {
            const allNotebooks = libraries.flatMap(
                (library) => library.notebooks,
            )
            notebookStore.getState().loadNotebooks(allNotebooks)
        }
    },
)
