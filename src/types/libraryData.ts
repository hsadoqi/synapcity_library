import libraryData from '@/lib/data/library.json'
import notebooksData from '@/lib/data/notebooks.json'
import notesData from '@/lib/data/notes.json'

export type RawNotebook = Omit<Notebook, 'libraries' | 'notes'> & {
    libraries: string[]
    notes: string[]
}

export type RawLibrary = Omit<Library, 'notebooks'> & {
    notebooks: string[]
}

export type RawNote = Omit<Note, 'notebooks'> & {
    notebooks: string[]
}

export type Library = {
    id: string
    name: string
    color: string
    icon: string
    tags: string[]
    notebooks: LibraryNotebook[]
    isStarred: boolean
    isArchived: boolean
    isDeleted: boolean
    deletedAt?: Date | string
    createdAt: Date | string
    updatedAt: Date | string
    lastAccessedAt: Date | string
    default?: boolean
}

export type LibraryNotebook = {
    id: string
    name: string
    icon: string
    tags: string[]
}

export type Notebook = {
    id: string
    name: string
    description?: string
    shade: number
    icon: string
    tags: string[]
    notes: NotebookNote[]
    libraries: NotebookLibrary[]
    isStarred: boolean
    isArchived: boolean
    isDeleted: boolean
    deletedAt?: Date | string
    createdAt: Date | string
    updatedAt: Date | string
    lastAccessedAt: Date | string
    default?: boolean
}

export type NotebookLibrary = {
    id: string
    name: string
    color: string
    icon: string
    tags: string[]
}

export type NotebookNote = {
    id: string
    name: string
    description?: string
    icon: string
    tags: string[]
}

export type Note = {
    id: string
    name: string
    description?: string
    content: string
    icon: string
    tags: string[]
    notebooks: NoteNotebook[]
    isStarred: boolean
    isArchived: boolean
    isDeleted: boolean
    deletedAt?: Date | string
    createdAt: Date | string
    updatedAt: Date | string
    lastAccessedAt: Date | string
}

export type NoteNotebook = {
    id: string
    name: string
    shade: number
}

const defaultLibrary = libraryData.find((library) => library.default)

const defaultNotebook = notebooksData.find((notebook) => notebook.default)

export {
    defaultLibrary,
    defaultNotebook,
    libraryData,
    notebooksData,
    notesData,
}
