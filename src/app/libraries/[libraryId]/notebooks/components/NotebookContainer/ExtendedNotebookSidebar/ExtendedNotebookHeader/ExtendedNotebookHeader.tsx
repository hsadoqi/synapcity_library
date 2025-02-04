'use client'

import { SidebarHeader } from '@/components/ui/sidebar'
import { Button } from '@/components'
import { useEffect, useRef, useState } from 'react'
import { clsx } from 'clsx'
import { useNotebookStore } from '@/stores/notebook-store'
import { Notebook } from '@/types/libraryData'
import { CurrentNotebookSubHeader } from './CurrentNotebookSubHeader'

export default function ExtendedNotebookSidebarHeader() {
    const { selectedNotebook, notebooks, setNotebook } = useNotebookStore()
    const searchRef = useRef<HTMLInputElement | null>(null)
    const [showSearch, setShowSearch] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if (showSearch && searchRef.current) {
            searchRef.current.focus()
        }
    }, [showSearch])

    const toggleSearch = () => setShowSearch((prev) => !prev)

    const toggleOpen = () => {
        setShowSearch(false)
        setIsOpen((prev) => !prev)
    }

    return (
        <SidebarHeader
            className={clsx(
                'border-b border-active-700 bg-active-200 dark:bg-black/80 py-0',
                {
                    'p-2': isOpen,
                },
            )}
        >
            <div
                className={clsx(
                    'flex flex-col w-full items-center justify-center overflow-hidden',
                    {
                        'h-16': !isOpen,
                    },
                )}
            >
                <CurrentNotebookSubHeader
                    toggleSearch={toggleSearch}
                    toggleOpen={toggleOpen}
                    isOpen={isOpen}
                />
                <div
                    className={`transition-all duration-300 ease-in-out overflow-y-auto scroll-hide overscroll-contain w-full shadow-inner rounded-b-md scale-95 ${
                        isOpen
                            ? 'max-h-28 opacity-100 visible'
                            : 'max-h-0 opacity-0 invisible'
                    }`}
                >
                    {notebooks.map((item, index) => {
                        if (item === selectedNotebook) return
                        return (
                            <Button
                                key={`search-item-${index}`}
                                onClick={() => {
                                    setNotebook(item as unknown as Notebook)
                                    toggleOpen()
                                }}
                                variant={
                                    item.id === selectedNotebook?.id
                                        ? 'inner'
                                        : 'ghost'
                                }
                                className={clsx(
                                    'justify-start w-full rounded-none hover:bg-active-50 bg-white dark:bg-active-950 dark:hover:bg-active-900 dark:active:bg-active-800',
                                    {
                                        active:
                                            item.id === selectedNotebook?.id,
                                        'shadow-inner': item.default,
                                    },
                                )}
                            >
                                {item.name}
                            </Button>
                        )
                    })}
                </div>
            </div>
        </SidebarHeader>
    )
}

ExtendedNotebookSidebarHeader.displayName = 'ExtendedNotebookSidebarHeader'
