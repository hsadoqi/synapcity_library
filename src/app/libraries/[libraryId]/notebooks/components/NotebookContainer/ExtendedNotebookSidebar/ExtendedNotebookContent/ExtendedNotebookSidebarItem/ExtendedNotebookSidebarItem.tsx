'use client'

import { type Note } from '@/types/libraryData'
import { useNoteStore } from '@/stores/note-store'
import { useNotebookStore } from '@/stores/notebook-store'
import { useLibraryStore } from '@/stores/library-store'
import Link from 'next/link'
import clsx from 'clsx'

export default function ExtendedNotebookSidebarItem({
    className = '',
    note,
}: {
    className?: string
    note: Note
}) {
    const { setNote, selectedNote } = useNoteStore()
    const { selectedLibrary } = useLibraryStore()
    const { selectedNotebook } = useNotebookStore()

    return (
        <div
            className={clsx(
                'relative flex flex-col items-start gap-2 whitespace-nowrap hover:border-y-[1px] px-2 py-4 text-sm leading-tight hover:text-sidebar-accent-foreground hover:bg-active-100 dark:hover:bg-active-900 active:bg-active-200 hover:shadow-inner hover:border-[1px] hover:border-active-500',
                {
                    'bg-active-50 dark:hover:bg-active-900 hover:bg-active-100 dark:bg-active-950 shadow-inner dark:text-white border-y-[0.5px] border-active-500':
                        selectedNote === note,
                },
                className,
            )}
        >
            <Link
                href={`/libraries/${selectedLibrary?.id}/${selectedNotebook?.id}/${note?.id}`}
            >
                <div
                    className="inset-0 flex flex-col items-start gap-2 h-full w-full justify-between"
                    onClick={() => setNote(note)}
                >
                    <h3>{note.name}</h3>{' '}
                    <span className="line-clamp-2 truncate whitespace-break-spaces text-xs">
                        {note.content}
                    </span>
                </div>
            </Link>
            {}
        </div>
    )
}

ExtendedNotebookSidebarItem.displayName = 'ExtendedNotebookSidebarItem'
