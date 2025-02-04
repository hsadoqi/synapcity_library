'use client'

import { SidebarHeader } from '@/components/ui/sidebar'
import { Button } from '@/components'
import { useEffect, useRef, useState } from 'react'
import { clsx } from 'clsx'
import { useLibraryStore } from '@/stores/library-store'
import { Library } from '@/types/libraryData'
import CurrentLibrarySubHeader from './CurrentLibrarySubHeader/CurrentLibrarySubHeader'

export default function ExtendedLibrarySidebarHeader() {
    const { selectedLibrary, libraries, setLibrary } = useLibraryStore()
    const searchRef = useRef<HTMLInputElement | null>(null)
    const [showSearch, setShowSearch] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if (showSearch && searchRef.current) {
            searchRef.current.focus()
        }
    }, [showSearch])

    const toggleSearch = () => {
        setShowSearch((prev) => !prev)
    }

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
                <CurrentLibrarySubHeader
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
                    {libraries.map((item, index) => {
                        if (item === selectedLibrary) return
                        return (
                            <Button
                                key={`search-item-${index}`}
                                onClick={() => {
                                    setLibrary(item as unknown as Library)
                                    toggleOpen()
                                }}
                                variant={
                                    item.id === selectedLibrary?.id
                                        ? 'inner'
                                        : 'ghost'
                                }
                                className={clsx(
                                    'justify-start w-full rounded-none hover:bg-active-50 bg-white dark:bg-active-950 dark:hover:bg-active-900 dark:active:bg-active-800',
                                    {
                                        active: item.id === selectedLibrary?.id,
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

ExtendedLibrarySidebarHeader.displayName = 'ExtendedLibrarySidebarHeader'
