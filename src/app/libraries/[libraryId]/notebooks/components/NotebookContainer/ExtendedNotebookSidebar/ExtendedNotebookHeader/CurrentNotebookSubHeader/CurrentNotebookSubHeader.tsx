'use client'

import { Button } from '@/components'
import { useNotebookStore } from '@/stores/notebook-store'
import { Label } from '@radix-ui/react-dropdown-menu'
import { ChevronDownCircle, ChevronLeftCircle } from 'lucide-react'
import { CurrentNotebookSettings } from '../CurrentNotebookSettings'
import { useLibraryStore } from '@/stores/library-store'
export default function CurrentNotebookSubHeader({
    toggleOpen,
    isOpen,
}: {
    toggleSearch: () => void
    toggleOpen: () => void
    isOpen: boolean
}) {
    const { selectedNotebook, defaultNotebook } = useNotebookStore()
    const { selectedLibrary } = useLibraryStore()

    return (
        <div className="flex justify-between items-center gap-2 w-full shadow-sm">
            <Label className="flex items-center text-sm justify-between flex-1 w-full transition-all ease-in-out duration-300 hover:cursor-pointer">
                <Button variant="ghost" onClick={() => toggleOpen()} asChild>
                    <div className="text-base font-semibold text-foreground flex w-full items-center justify-between py-4 bg-active-50 hover:bg-active-100 dark:bg-active-900 dark:hover:bg-active-950">
                        <span className="leading-none">
                            {selectedNotebook
                                ? selectedNotebook.name
                                : defaultNotebook?.name}
                        </span>
                        {selectedLibrary?.notebooks &&
                            selectedLibrary?.notebooks?.length > 1 &&
                            (isOpen ? (
                                <ChevronDownCircle className="h-5 w-5 shrink-0" />
                            ) : (
                                <ChevronLeftCircle className="h-5 w-5 shrink-0" />
                            ))}
                    </div>
                </Button>
            </Label>
            {/* <div className="relative flex gap-2 items-center justify-center"> */}

            <CurrentNotebookSettings
                notebook={selectedNotebook || defaultNotebook}
                show={!isOpen}
            />
            {/* </div> */}
            {/* <FloatingSearch
        variant="ghost"
        filterData={filterNotebooks}
        resetFilters={resetFilters}
      /> */}
        </div>
    )
}
