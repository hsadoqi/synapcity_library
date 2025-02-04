import { createStore, StoreApi, useStore } from 'zustand'
import { Note } from '@/types/libraryData'
import { subscribeWithSelector } from 'zustand/middleware'

export type NoteState = {
    notes: Note[]
    filteredNotes: Note[]
    selectedNote: Note | null
}

export type NoteActions = {
    setNote: (note: Note | null) => void
    setActiveNoteById: (noteId: string) => void
    loadNotes: (notes: Note[]) => void
    filterNotes: (searchQuery: string) => void
    resetFilters: () => void
    addNote: (note: Note) => void
    archiveNote: () => void
    restoreNote: () => void
    updateNote: (updates: Partial<Note>) => void
}

export type NoteStore = NoteState & NoteActions

export const noteStore = createStore<NoteStore>()(
    subscribeWithSelector((set) => ({
        notes: [],
        filteredNotes: [],
        selectedNote: null,
        setNote: (note: Note | null) => set({ selectedNote: note }),
        setActiveNoteById: (noteId: string) => {
            set((state) => {
                const foundNote = state.notes.find((note) => note.id === noteId)
                return { selectedNote: foundNote }
            })
        },
        loadNotes: (notes) => {
            set({ notes, filteredNotes: notes })
        },
        filterNotes: (searchQuery: string) =>
            set((state) => ({
                filteredNotes: state.notes.filter((note) =>
                    note.name.toLowerCase().includes(searchQuery.toLowerCase()),
                ),
            })),
        resetFilters: () => set((state) => ({ filteredNotes: state.notes })),
        addNote: (note: Note) =>
            set((state) => ({ notes: [...state.notes, note] })),
        archiveNote: () =>
            set((state) => {
                if (state.selectedNote) {
                    return {
                        notes: state.notes.map((note) =>
                            note.id === state.selectedNote?.id
                                ? { ...note, isArchived: true }
                                : note,
                        ),
                        selectedNote: {
                            ...state.selectedNote,
                            isArchived: true,
                        },
                    }
                }
                return state
            }),
        restoreNote: () =>
            set((state) => {
                if (state.selectedNote) {
                    return {
                        notes: state.notes.map((note) =>
                            note.id === state.selectedNote?.id
                                ? { ...note, isArchived: false }
                                : note,
                        ),
                        selectedNote: {
                            ...state.selectedNote,
                            isArchived: false,
                        },
                    }
                }
                return state
            }),
        updateNote: (updates: Partial<Note>) =>
            set((state) => {
                if (state.selectedNote) {
                    const updatedNote = {
                        ...state.selectedNote,
                        ...updates,
                    }
                    return {
                        notes: state.notes.map((note) =>
                            note.id === updatedNote.id ? updatedNote : note,
                        ),
                        selectedNote: updatedNote,
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

export const useNoteStore = createBoundedUseStore(noteStore)
