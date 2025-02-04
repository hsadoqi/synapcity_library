'use client'

import { Button } from '@/components'
import { useLibraryStore } from '@/stores/library-store'
import { Label } from '@radix-ui/react-dropdown-menu'
import { ChevronDownCircle, ChevronLeftCircle } from 'lucide-react'
import CurrentLibrarySettings from './CurrentLibrarySettings'

export default function CurrentLibrarySubHeader({
    toggleOpen,
    isOpen,
}: {
    toggleSearch: () => void
    toggleOpen: () => void
    isOpen: boolean
}) {
    const { selectedLibrary, defaultLibrary } = useLibraryStore()

    return (
        <div className="flex justify-between items-center w-full shadow-sm gap-2">
            <Label className="flex items-center text-sm justify-between flex-1 w-full transition-all ease-in-out duration-300 hover:cursor-pointer">
                <Button variant="ghost" onClick={() => toggleOpen()} asChild>
                    <div className="text-base font-semibold text-foreground flex w-full items-center justify-between bg-active-50 hover:bg-active-100 dark:bg-active-900 dark:hover:bg-active-950">
                        <span className="leading-none">
                            {selectedLibrary
                                ? selectedLibrary.name
                                : defaultLibrary?.name}
                        </span>
                        {isOpen ? (
                            <ChevronDownCircle className="h-5 w-5 shrink-0" />
                        ) : (
                            <ChevronLeftCircle className="h-5 w-5 shrink-0" />
                        )}
                    </div>
                </Button>
            </Label>
            <CurrentLibrarySettings
                library={selectedLibrary || defaultLibrary}
                show={!isOpen}
            />
        </div>
    )
}
