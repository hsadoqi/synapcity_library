'use client'

import { useLibraryStore } from '@/stores/library-store'
import * as React from 'react'
import { Usable, useEffect } from 'react'

type Params = {
    libraryId: string
}

export default function LibraryPage({ params }: { params: Usable<Params> }) {
    const { libraryId } = React.use(params)

    const { selectedLibrary, setActiveLibraryById } = useLibraryStore()

    useEffect(() => {
        if (
            libraryId &&
            (!selectedLibrary || selectedLibrary.id !== libraryId)
        ) {
            setActiveLibraryById(libraryId as string)
        }
    }, [libraryId, selectedLibrary, setActiveLibraryById])

    if (!selectedLibrary) {
        return (
            <div className="inset-0 flex items-center justify-center">
                Loading library...
            </div>
        )
    }
    return (
        <>
            <div className="px-8 py-6 size-full flex flex-col justify-start items-center">
                {selectedLibrary.notebooks.map((notebook) => (
                    <div key={`notebook-card-${notebook.id}`}>
                        {notebook.name}
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-3 gap-4 w-full">
                {selectedLibrary.notebooks.map((notebook) => (
                    <div key={`notebook-card-${notebook.id}`}>
                        {notebook.name}
                    </div>
                ))}
            </div>
        </>
    )
}
