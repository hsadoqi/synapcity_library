'use client'

import { Note } from '@/types'
import { PageHeaderWrapper } from '../PageHeaderWrapper'
import { useEffect, useRef, useState } from 'react'
import { useLibraryStore } from '@/stores/library-store'
import { useNotebookStore } from '@/stores/notebook-store'
import clsx from 'clsx'

export default function PageWrapper({
    note,
    children,
}: {
    note: Note
    children: React.ReactNode
}) {
    const noteRef = useRef<HTMLElement | null>(null)
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const {
        isSidebarOpen: isLibrarySidebarOpen,
        setSidebarOpen: setLibrarySidebarOpen,
    } = useLibraryStore()
    const {
        isSidebarOpen: isNotebooksSidebarOpen,
        setSidebarOpen: setNotebookSidebarOpen,
    } = useNotebookStore()

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (noteRef.current && noteRef.current.contains(e.target as Node)) {
                if (isLibrarySidebarOpen) {
                    setLibrarySidebarOpen(false)
                }

                if (isNotebooksSidebarOpen) {
                    setNotebookSidebarOpen(!isNotebooksSidebarOpen)
                }
            }
        }
        document.addEventListener('mousedown', handleClick)
        return () => document.removeEventListener('mousedown', handleClick)
    }, [
        isLibrarySidebarOpen,
        isNotebooksSidebarOpen,
        setLibrarySidebarOpen,
        setNotebookSidebarOpen,
    ])

    const toggleMetadata = () => {
        setIsOpen((prev) => !prev)
    }
    return (
        <main
            ref={noteRef}
            className="flex flex-col min-h-full shadow-active-500 shadow-md relative mx-auto w-full"
        >
            <div className="h-1/5 bg-active-50 dark:bg-active-950 z-0 absolute inset-0 md:min-h-32" />
            <div className="inset-0 absolute z-10 bg-white/50 dark:bg-black/50" />
            <div className="flex w-full h-full mx-auto">
                <div className="transition-all duration-500 delay-300 border-x-[1px] border-active-500 container mx-auto h-full z-20 shadow-md bg-white dark:bg-neutral-950">
                    <PageHeaderWrapper
                        note={note}
                        toggleMetadata={toggleMetadata}
                    />
                    <div className="px-8 divider before:bg-active-700 after:bg-active-700 dark:before:bg-active-700 dark:after:bg-active-700 before:opacity-30 after:opacity-30" />
                    <div className="flex-1">{children}</div>
                </div>
                <div
                    className={clsx(
                        'flex-1 h-full w-full z-10 transition-all duration-1000 delay-300 translate-x-full',
                        {
                            'animate-in slide-in-from-right fade-in-25 w-1/2':
                                isOpen,
                            'animate-out slide-out-to-right fade-out-25 w-0':
                                !isOpen,
                        },
                    )}
                >
                    Metadata
                </div>
            </div>
        </main>
    )
}
