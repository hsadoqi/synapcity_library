'use client'

import { Notebook } from '@/types/libraryData'
import { useLibraryStore } from '@/stores/library-store'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { useNotebookStore } from '@/stores/notebook-store'
import { useEffect, useState } from 'react'
import clsx from 'clsx'

export default function ExtendedLibrarySidebarItem({
    className = '',
    notebook,
}: {
    className?: string
    notebook: Notebook
}) {
    const { libraries, setLibrary, selectedLibrary } = useLibraryStore()
    const [badgeStyles, setBadgeStyles] = useState('')
    const { setNotebook, selectedNotebook } = useNotebookStore()
    const foundLibrary = libraries.find((lib) => lib.id === notebook.libraryId)

    useEffect(() => {
        if (foundLibrary) {
            const color = foundLibrary.color
            const styles = `cursor-pointer hover:shadow-sm bg-${color}-100 dark:bg-${color}-900 hover:bg-${color}-50 dark:hover:bg-${color}-900 z-50 absolute top-2 right-2`
            setBadgeStyles(styles)
        }
    }, [foundLibrary])

    return (
        <div
            className={clsx(
                'relative flex flex-col items-start gap-2 whitespace-nowrap hover:border-y-[1px] px-2 py-4 text-sm leading-tight hover:text-sidebar-accent-foreground hover:bg-active-100 dark:hover:bg-active-900 active:bg-active-200 hover:shadow-inner hover:border-1 hover:border-active-500',
                {
                    'bg-active-50 dark:hover:bg-active-900 hover:bg-active-100 dark:bg-active-950 shadow-inner dark:text-white border-y-[0.5px] border-active-500':
                        selectedNotebook === notebook,
                },
                className,
            )}
        >
            <Link
                href={`/libraries/${notebook?.libraryId}/notebooks/${notebook?.id}`}
                onClick={() => setNotebook(notebook)}
                className="inset-0 h-full w-full"
            >
                <div className="flex flex-col items-start gap-2 h-full w-full justify-between">
                    <h3>{notebook.name}</h3>{' '}
                    <span className="line-clamp-2 whitespace-break-spaces text-xs">
                        Hello
                    </span>
                </div>
            </Link>
            {selectedLibrary?.default && (
                <Badge
                    variant="outline"
                    className={badgeStyles}
                    onClick={() => {
                        setLibrary(foundLibrary!)
                        setNotebook(notebook)
                    }}
                >
                    {foundLibrary?.name}
                </Badge>
            )}
        </div>
    )
}

ExtendedLibrarySidebarItem.displayName = 'ExtendedLibrarySidebarItem'
