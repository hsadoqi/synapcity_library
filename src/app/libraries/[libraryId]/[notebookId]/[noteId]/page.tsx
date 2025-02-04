'use client'

import { Usable, useEffect } from 'react'
import { useNoteStore } from '@/stores/note-store'
import * as React from 'react'
import { PageContent, PageWrapper } from './components'

type Params = {
    noteId: string
}

export default function NotePage({ params }: { params: Usable<Params> }) {
    const { noteId } = React.use(params)

    const { selectedNote, setActiveNoteById, setNote } = useNoteStore()

    useEffect(() => {
        if (noteId && (!selectedNote || selectedNote.id !== noteId)) {
            setActiveNoteById(noteId)
        }
    }, [noteId, selectedNote, setActiveNoteById, setNote])

    if (!selectedNote) {
        return (
            <div className="inset-0 flex items-center justify-center">
                Loading note...
            </div>
        )
    }

    return (
        <PageWrapper note={selectedNote}>
            <PageContent note={selectedNote} />
        </PageWrapper>
    )
}
