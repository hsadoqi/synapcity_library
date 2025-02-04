'use client'

import {
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
} from '@/components/ui/sidebar'
import ExtendedNotebookSidebarItem from './ExtendedNotebookSidebarItem/ExtendedNotebookSidebarItem'
import { useNoteStore } from '@/stores/note-store'
import { FloatingSearch } from '@/components'

export default function ExtendedNotebookSidebarContent() {
    const { filteredNotes, filterNotes, resetFilters } = useNoteStore()

    return (
        <SidebarContent className="bg-white/80 dark:bg-black/80 shadow-inner">
            <SidebarGroup className="py-0">
                <FloatingSearch
                    variant="ghost"
                    filterData={filterNotes}
                    resetFilters={resetFilters}
                />
                <SidebarGroupContent>
                    {filteredNotes.map((note, index) => (
                        <ExtendedNotebookSidebarItem
                            key={`extended-notebook-${index}`}
                            note={note}
                        />
                    ))}
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
    )
}

ExtendedNotebookSidebarContent.displayName = 'ExtendedNotebookSidebarContent'
