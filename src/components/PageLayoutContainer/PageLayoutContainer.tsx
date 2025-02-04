'use client'

import { BreadcrumbMenu } from '@/components/'
import { useLibraryStore } from '@/stores/library-store'
import { useNotebookStore } from '@/stores/notebook-store'
import { useNoteStore } from '@/stores/note-store'
import { BreadcrumbLabels } from '../BreadcrumbMenu/BreadcrumbMenu'
import { EditableHeader } from '../EditableHeader'
import { useEffect, useState } from 'react'
import { Note, Library, Notebook } from '@/types'

export default function PageLayoutContainer({
    children,
}: {
    headerChildren?: React.ReactNode
    children: React.ReactNode
}) {
    const [data, setData] = useState<Note | Library | Notebook>()
    const { selectedLibrary } = useLibraryStore()
    const { selectedNotebook } = useNotebookStore()
    const { selectedNote } = useNoteStore()

    useEffect(() => {
        if (selectedNote) {
            console.log('Setting data to selectedNote', selectedNote)
            setData(selectedNote)
        } else if (selectedNotebook) {
            console.log('Setting data to selectedNotebook', selectedNotebook)
            setData(selectedNotebook)
        } else if (selectedLibrary) {
            console.log('Setting data to selectedLibrary', selectedLibrary)
            setData(selectedLibrary)
        }
    }, [selectedLibrary, selectedNote, selectedNotebook])

    const labels: BreadcrumbLabels = {
        libraries: { label: 'Libraries', type: 'libraries' },
        ...(selectedLibrary && {
            [selectedLibrary?.id || 0]: {
                label: selectedLibrary?.name || 'Master Library',
                type: 'libraries',
                id: selectedLibrary.id,
                name: selectedLibrary.name,
            },
        }),
        ...(selectedNotebook && {
            [selectedNotebook.id]: {
                label: selectedNotebook.name,
                type: 'notebooks',
                id: selectedNotebook.id,
                name: selectedNotebook.name,
            },
        }),
        ...(selectedNote && {
            [selectedNote.id]: {
                label: selectedNote.name,
                type: 'notes',
                id: selectedNote.id,
                name: selectedNote.name,
            },
        }),
    }

    return (
        <div className="size-full flex flex-col relative overflow-none">
            <div className="h-54 w-full shadow-md flex flex-col justify-center items-start z-30">
                <BreadcrumbMenu labels={labels} />
                <EditableHeader data={data} />
            </div>

            <div className="shadow-inner flex-1 bg-gray-200/80 dark:bg-black/80">
                {children}
            </div>
        </div>
    )
}
