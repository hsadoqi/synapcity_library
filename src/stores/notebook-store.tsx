import { createStore, StoreApi, useStore } from 'zustand'
import { Notebook, Note } from '@/types/libraryData'

export type DefaultNotebookType = Notebook & { default: boolean }

const defaultNotebook: Notebook & { default: boolean } = {
    id: '0',
    name: 'All Notes',
    shade: 500,
    icon: 'NotebookPen',
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

export type NotebookState = {
    notebooks: Notebook[]
    filteredNotebooks: Notebook[]
    selectedNotebook: Notebook | null
    defaultNotebook: Notebook
    isSidebarOpen: boolean
}

export type NotebookActions = {
    setNotebook: (notebook: Notebook) => void
    loadNotebooks: (notebooks: Notebook[]) => void
    filterNotebooks: (searchQuery: string) => void
    resetFilters: () => void
    addNotebook: (notebook: Notebook) => void
    archiveNotebook: () => void
    restoreNotebook: () => void
    updateNotebook: (Notebook: Partial<Notebook>) => void
    setSidebarOpen: (isSidebarOpen: boolean) => void
    toggleSidebar: () => void
}

export type NotebookStore = NotebookState & NotebookActions

export const notebookStore = createStore<NotebookStore>()((set) => ({
    isSidebarOpen: false,
    setSidebarOpen: (isSidebarOpen) => set({ isSidebarOpen }),
    toggleSidebar: () =>
        set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
    notebooks: [defaultNotebook],
    filteredNotebooks: [defaultNotebook],
    selectedNotebook: null,
    defaultNotebook,
    setNotebook: (notebook: Notebook) => set({ selectedNotebook: notebook }),
    loadNotebooks: (notebooks) =>
        set({ notebooks, filteredNotebooks: notebooks }),
    filterNotebooks: (searchQuery: string) =>
        set((state) => ({
            filteredNotebooks: state.notebooks.filter((notebook) =>
                notebook.name.toLowerCase().includes(searchQuery.toLowerCase()),
            ),
        })),
    resetFilters: () =>
        set((state) => ({ filteredNotebooks: state.notebooks })),
    addNotebook: (notebook: Notebook) =>
        set((state) => ({ notebooks: [...state.notebooks, notebook] })),
    archiveNotebook: () =>
        set((state) => {
            if (state.selectedNotebook) {
                return {
                    notebooks: state.notebooks.map((notebook) =>
                        notebook.id === state.selectedNotebook?.id
                            ? { ...notebook, isArchived: true }
                            : notebook,
                    ),
                    selectedNotebook: {
                        ...state.selectedNotebook,
                        isArchived: true,
                    },
                }
            }
            return state
        }),
    restoreNotebook: () =>
        set((state) => {
            if (state.selectedNotebook) {
                return {
                    notebooks: state.notebooks.map((notebook) =>
                        notebook.id === state.selectedNotebook?.id
                            ? { ...notebook, isArchived: false }
                            : notebook,
                    ),
                    selectedNotebook: {
                        ...state.selectedNotebook,
                        isArchived: false,
                    },
                }
            }
            return state
        }),
    updateNotebook: (updates: Partial<Notebook>) =>
        set((state) => {
            if (state.selectedNotebook) {
                const updatedNotebook = {
                    ...state.selectedNotebook,
                    ...updates,
                }
                return {
                    notebooks: state.notebooks.map((notebook) =>
                        notebook.id === updatedNotebook.id
                            ? updatedNotebook
                            : notebook,
                    ),
                    selectedNotebook: updatedNotebook,
                }
            }
            return state
        }),
}))

const createBoundedUseStore = ((store) => (selector) =>
    useStore(store, selector)) as <S extends StoreApi<unknown>>(
    store: S,
) => {
    (): ExtractState<S>
    <T>(selector: (state: ExtractState<S>) => T): T
}

type ExtractState<S> = S extends { getState: () => infer X } ? X : never

export const useNotebookStore = createBoundedUseStore(notebookStore)
