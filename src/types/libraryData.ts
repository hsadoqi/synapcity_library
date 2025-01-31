import { icons } from 'lucide-react'
import { Color, ColorShade } from './styling'
import { IconifyIcon } from '@iconify/types'

type Icon = keyof typeof icons | string | IconifyIcon
export type Library = {
    id: string
    name: string
    color: Color
    icon: string
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
    icon?: Icon
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
    icon?: Icon
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
