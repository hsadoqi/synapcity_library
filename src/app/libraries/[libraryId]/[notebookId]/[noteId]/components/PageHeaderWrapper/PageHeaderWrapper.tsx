'use client'

import { Button } from '@/components'
import { TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { useLibraryStore } from '@/stores/library-store'
import { useNotebookStore } from '@/stores/notebook-store'
import { Note } from '@/types'
import { Tooltip } from '@radix-ui/react-tooltip'
import { Ellipsis } from 'lucide-react'
import Link from 'next/link'
import { useEffect } from 'react'

export default function PageHeaderWrapper({ note }: { note: Note }) {
    const { selectedLibrary } = useLibraryStore()
    const { selectedNotebook } = useNotebookStore()
    useEffect(() => {
        console.log(
            'note',
            note,
            'notebook',
            selectedNotebook,
            'library',
            selectedLibrary,
        )
    }, [selectedLibrary, selectedNotebook, note])
    return (
        <div className="@container/main flex flex-col min-h-16 md:min-h-32 h-1/5 size-full relative px-8">
            <div className="hidden sm:flex items-center justify-end min-h-16 h-16 drop-shadow-sm hover:drop-shadow-md drop-shadow-active-500 border-b">
                <div className="breadcrumbs">
                    <ul>
                        <li>
                            <Link href="/libraries">Libraries</Link>
                        </li>
                        {selectedLibrary && (
                            <li>
                                <Link href={`/libraries/${selectedLibrary.id}`}>
                                    {selectedLibrary?.name}
                                </Link>
                            </li>
                        )}
                        {selectedNotebook && (
                            <li>
                                <Link
                                    href={`/libraries/${selectedLibrary?.id}/${selectedNotebook.id}`}
                                >
                                    {selectedNotebook?.name}
                                </Link>
                            </li>
                        )}
                        {note && <li>{note.name}</li>}
                    </ul>
                </div>
            </div>
            <div className="relative flex-1 flex flex-col items-start justify-center h-full @md/main:gap-2">
                <h1 className="font-bold transition-all duration-300 ease-in-out text-2xl @lg/main:text-3xl @xl/main:text-4xl pt-2 pb-2 whitespace-nowrap">
                    {note.name}
                </h1>
                <div className="hidden gap-2 @md/main:flex @min-[400px]/main:flex">
                    {note.tags.map((tag, index) => (
                        <div
                            key={`tag-${index}`}
                            className="inline-flex shadow-sm hover:shadow-md place-items-center badge bg-transparent text-active-800 border-active-500 dark:border-active-300 dark:text-active-300  dark:hover:text-active-100  dark:hover:bg-active-900 hover:bg-active-500 hover:text-white transition-all duration-300 ease-in-out"
                        >
                            {tag}
                        </div>
                    ))}
                </div>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button size="icon" className="absolute right-0 top-4">
                            <Ellipsis className="size-4" />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" align="center">
                        Open Metadata
                    </TooltipContent>
                </Tooltip>
            </div>
        </div>
    )
}
