'use client'

import { useNotebookStore } from '@/stores/notebook-store'
import { useEffect, Usable } from 'react'
import * as React from 'react'

type Params = {
    notebookId: string
}

export default function NotebookPage({ params }: { params: Usable<Params> }) {
    const { notebookId } = React.use(params)
    const { selectedNotebook, setActiveNotebookById } = useNotebookStore()

    useEffect(() => {
        if (
            notebookId &&
            (!selectedNotebook || selectedNotebook.id !== notebookId)
        ) {
            setActiveNotebookById(notebookId as string)
        }
    }, [notebookId, selectedNotebook, setActiveNotebookById])

    if (!selectedNotebook) {
        return (
            <div className="inset-0 flex items-center justify-center">
                Loading notebook...
            </div>
        )
    }

    return (
        <div className="px-8 py-6 size-full flex flex-col justify-start items-center">
            <div className="grid grid-cols-3 gap-4 w-full">
                {selectedNotebook.notes.map((note) => (
                    <div key={`note-card-${note.id}`}>{note.name}</div>
                ))}
            </div>
        </div>
    )
}
