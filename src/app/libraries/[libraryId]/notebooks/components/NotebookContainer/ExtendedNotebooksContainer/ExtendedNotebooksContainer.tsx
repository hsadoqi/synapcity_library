'use client'

import { Button } from '@/components'
import {
    SidebarHeader,
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
} from '@/components/ui/sidebar'
import { useNotebookStore } from '@/stores/notebook-store'
import { Notebook } from '@/types'
import { Label } from '@/components/ui/label'
import clsx from 'clsx'
import { ChevronDownCircle, ChevronLeftCircle } from 'lucide-react'
import { useState } from 'react'

export default function ExtendedNotebooksContainer() {
    const { selectedNotebook, notebooks, setNotebook } = useNotebookStore()
    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = () => {
        setIsOpen((prev) => !prev)
    }

    return (
        <Sidebar collapsible="none" className="hidden flex-1 md:flex pt-4">
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
                                    {selectedNotebook && selectedNotebook.name}
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
                        {notebooks.map((notebook, index) => {
                            return (
                                <Button
                                    key={`search-item-${index}`}
                                    onClick={() =>
                                        setNotebook(
                                            notebook as unknown as Notebook,
                                        )
                                    }
                                    variant={
                                        notebook.id === selectedNotebook?.id
                                            ? 'inner'
                                            : 'ghost'
                                    }
                                    className={clsx(
                                        'justify-start w-full rounded-none',
                                        {
                                            active:
                                                selectedNotebook?.id ===
                                                selectedNotebook?.id,
                                        },
                                    )}
                                >
                                    {selectedNotebook?.name}
                                </Button>
                            )
                        })}
                    </div>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        {selectedNotebook?.notes.map((note, index) => (
                            <div
                                key={`note-${index}`}
                                className="flex flex-col items-start gap-2 whitespace-nowrap border-b p-4 text-sm leading-tight hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                            >
                                <div className="flex w-full items-center gap-2 h-full justify-between">
                                    <span>{note.title}</span> {/* <Badge */}
                                    {/* // variant="outline"
                    // className="cursor-pointer hover:shadow-sm"
                  // onClick={() => setNoteb(foundLibrary!)} */}
                                    {/* > */}
                                    {selectedNotebook?.name}
                                    {/* </Badge> */}
                                </div>
                                {/* <Link href={`/libraries/notebooks/${notebook?.id}`} onClick={() => setNotebook(notebook)} className="inset-0 h-full w-full"> */}
                                <span className="line-clamp-2 w-[260px] whitespace-break-spaces text-xs">
                                    Hello
                                </span>
                                {/* </Link> */}
                            </div>
                        ))}
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
