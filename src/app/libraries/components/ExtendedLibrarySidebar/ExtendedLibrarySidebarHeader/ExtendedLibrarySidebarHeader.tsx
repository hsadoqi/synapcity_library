'use client'

import { SidebarHeader } from '@/components/ui/sidebar'
import { Label } from '@radix-ui/react-dropdown-menu'
import { ChevronDownCircle, ChevronLeftCircle } from 'lucide-react'
import { Button } from '@/components'
import { useState } from 'react'
import { clsx } from 'clsx'
import { useLibraryStore } from '@/stores/library-store'
import { Library } from '@/types/libraryData'
import LibrarySearch from '../../LibrarySearch/LibrarySearch'

export default function ExtendedLibrarySidebarHeader() {
    const { selectedLibrary, defaultLibrary, libraries, setLibrary } =
        useLibraryStore()
    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = () => {
        setIsOpen((prev) => !prev)
    }

    return (
        <SidebarHeader className="border-b">
            <div className="flex flex-col w-full h-full items-center justify-between overflow-hidden pb-2">
                <Label className="flex items-center text-sm justify-between flex-1 w-full">
                    <Button
                        onClick={toggleOpen}
                        variant="ghost"
                        size="icon"
                        className="h-full w-full px-2"
                    >
                        <div className="text-base font-semibold text-foreground flex w-full items-center justify-between py-4">
                            <span className="leading-none">
                                {selectedLibrary
                                    ? selectedLibrary.name
                                    : defaultLibrary.name}
                            </span>
                            {isOpen ? (
                                <ChevronDownCircle className="h-5 w-5 shrink-0" />
                            ) : (
                                <ChevronLeftCircle className="h-5 w-5 shrink-0" />
                            )}
                        </div>
                    </Button>
                </Label>
                <div
                    className={`transition-all duration-300 ease-in-out overflow-y-auto scrollbar-sm w-full border shadow-inner ${
                        isOpen
                            ? 'max-h-28 opacity-100 visible'
                            : 'max-h-0 opacity-0 invisible'
                    }`}
                >
                    {libraries.map((item, index) => {
                        if (item && item.default) return
                        return (
                            <Button
                                key={`search-item-${index}`}
                                onClick={() =>
                                    setLibrary(item as unknown as Library)
                                }
                                variant={
                                    item.id === selectedLibrary?.id
                                        ? 'inner'
                                        : 'ghost'
                                }
                                className={clsx(
                                    'justify-start w-full rounded-none',
                                    {
                                        active: item.id === selectedLibrary?.id,
                                    },
                                )}
                            >
                                {item.name}
                            </Button>
                        )
                    })}
                </div>
                <LibrarySearch />
            </div>
        </SidebarHeader>
    )
}

ExtendedLibrarySidebarHeader.displayName = 'ExtendedLibrarySidebarHeader'
