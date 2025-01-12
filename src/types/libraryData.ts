import { icons } from 'lucide-react'
import { Color, ColorShade } from './styling'

export type Library = {
    id: string
    name: string
    description?: string
    color: Color
    icon: keyof typeof icons
    tags: string[]
    notebooks: Notebook[]
    isStarred: boolean
    isArchived: boolean
    isDeleted: boolean
    deletedAt?: Date
    createdAt: Date
    updatedAt: Date
    lastAccessedAt: Date
    default?: boolean
}

export type Notebook = {
    id: string
    name: string
    description?: string
    shade: ColorShade
    icon?: keyof typeof icons
    tags: string[]
    notes: Note[]
    libraryId: string
    isStarred: boolean
    isArchived: boolean
    isDeleted: boolean
    deletedAt?: Date
    createdAt: Date
    updatedAt: Date
    lastAccessedAt: Date
}

export type Note = {
    id: string
    title: string
    description?: string
    content: string
    icon?: keyof typeof icons
    tags: string[]
    notebooks: Notebook[]
    isStarred: boolean
    isArchived: boolean
    isDeleted: boolean
    deletedAt?: Date
    createdAt: Date
    updatedAt: Date
    lastAccessedAt: Date
}
