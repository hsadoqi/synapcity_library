'use client'

import { useNotebookStore } from '@/stores/notebook-store'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'

export default function NotebookPage() {
    const { selectedNotebook, setActiveNotebookById } = useNotebookStore()
    const { notebookId } = useParams()

    useEffect(() => {
        if (notebookId) {
            console.log('heres notebook id', notebookId)
            setActiveNotebookById(
                typeof notebookId === 'string'
                    ? notebookId
                    : notebookId.join(''),
            ) // Set the active notebook
        }
    }, [notebookId, setActiveNotebookById])

    return (
        <div className="h-full w-full flex justify-center items-center">
            <h3>{selectedNotebook?.name}</h3>
        </div>
    )
}
