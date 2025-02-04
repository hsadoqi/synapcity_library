import { createStore, StoreApi, useStore } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'
import { libraryStore } from './library-store'
import { noteStore } from './note-store'
import {
    notebooksData,
    Notebook,
    defaultNotebook,
    notesData,
} from '@/types/libraryData'

export type NotebookState = {
    notebooks: Notebook[]
    filteredNotebooks: Notebook[]
    selectedNotebook: Notebook | null
    defaultNotebook?: Notebook
    isSidebarOpen: boolean
}

export type NotebookActions = {
    setNotebook: (notebook: Notebook | null) => void
    setActiveNotebookById: (noteBookId: string) => void
    toggleSidebar: (value: boolean) => void
    setDefaultNotebook: () => void
    loadNotebooks: (notebooks?: Notebook[]) => void
    filterNotebooks: (searchQuery?: string) => void
    resetFilters: () => void
    addNotebook: (notebook: Notebook) => void
    archiveNotebook: () => void
    restoreNotebook: () => void
    updateNotebook: (Notebook: Partial<Notebook>) => void
}

export type NotebookStore = NotebookState & NotebookActions

export const notebookStore = createStore<NotebookStore>()(
    subscribeWithSelector((set) => ({
        notebooks: [],
        filteredNotebooks: [],
        selectedNotebook: null,
        defaultNotebook,
        isSidebarOpen: false,
        toggleSidebar: (value?: boolean) =>
            set((state) => {
                return { isSidebarOpen: value || !state.isSidebarOpen }
            }),
        setNotebook: (notebook: Notebook | null) =>
            set({ selectedNotebook: notebook }),
        setActiveNotebookById: (notebookId: string) => {
            set((state) => {
                if (state.notebooks) {
                    const foundNotebook = state.notebooks.find(
                        (notebook) => notebook.id === notebookId,
                    )
                    return { selectedNotebook: foundNotebook }
                } else {
                    return { selectedNotebook: defaultNotebook }
                }
            })
        },
        setDefaultNotebook: () => set({ selectedNotebook: defaultNotebook }),
        loadNotebooks: (notebooks) =>
            set((state) => {
                let updatedNotebooks: Notebook[]

                if (notebooks) {
                    updatedNotebooks = notebooks
                } else {
                    updatedNotebooks = notebooksData
                }

                return {
                    notebooks: updatedNotebooks,
                    filteredNotebooks: updatedNotebooks,
                    selectedNotebook:
                        state.selectedNotebook ??
                        updatedNotebooks.find((notebook) => notebook.default) ??
                        defaultNotebook,
                }
            }),
        filterNotebooks: (searchQuery?: string) =>
            set((state) => {
                if (!searchQuery) {
                    return { filteredNotebooks: state.notebooks }
                }
                return {
                    filteredNotebooks: state.notebooks.filter((notebook) =>
                        notebook.name
                            .toLowerCase()
                            .includes(searchQuery.toLowerCase()),
                    ),
                }
            }),
        resetFilters: () =>
            set((state) => ({
                filteredNotebooks: state.notebooks,
                searchQuery: '',
            })),
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

export const useNotebookStore = createBoundedUseStore(notebookStore)

notebookStore.subscribe(
    (state) => state.selectedNotebook,
    (selectedNotebook) => {
        const { selectedLibrary } = libraryStore.getState()
        const { loadNotes } = noteStore.getState()
        if (selectedNotebook) {
            // if (selectedNotebook.libraryId) {
            //     if (
            //         !selectedLibrary ||
            //         !selectedLibrary.notebooks.includes(selectedNotebook)
            //     ) {
            //         setActiveLibraryById(selectedNotebook.libraryId)
            //     }
            // }

            if (selectedNotebook.default) {
                if (selectedLibrary?.default) {
                    loadNotes(notesData)
                } else {
                    const noteIds = selectedNotebook.notes.map(
                        (note) => note.id,
                    )
                    const notes = notesData.filter((note) =>
                        noteIds.includes(note.id),
                    )
                    loadNotes(notes)
                }
            } else {
                const noteIds = selectedNotebook.notes.map((note) => note.id)
                const notes = notesData.filter((note) =>
                    noteIds.includes(note.id),
                )
                loadNotes(notes)
            }
        } else if (selectedLibrary) {
            const noteIds = selectedLibrary.notebooks.map(
                (notebook) => notebook.id,
            )
            const notes = notesData.filter((note) => noteIds.includes(note.id))
            loadNotes(notes)
        } else {
            loadNotes(notesData)
        }
    },
)
