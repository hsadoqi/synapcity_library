'use client'

import {
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
} from '@/components/ui/sidebar'
import ExtendedLibrarySidebarItem from '../ExtendedLibrarySidebarItem/ExtendedLibrarySidebarItem'
import { useNotebookStore } from '@/stores/notebook-store'
import { FloatingSearch } from '@/components'

export default function ExtendedLibrarySidebarContent() {
    const { notebooks, filteredNotebooks, filterNotebooks, resetFilters } =
        useNotebookStore()
    return (
        <SidebarContent className="bg-white/80 dark:bg-black/80 shadow-inner">
            <SidebarGroup className="py-0">
                <FloatingSearch
                    variant="ghost"
                    filterData={filterNotebooks}
                    resetFilters={resetFilters}
                />
                <SidebarGroupContent>
                    {(filteredNotebooks || notebooks).map((notebook, index) => (
                        <ExtendedLibrarySidebarItem
                            key={`extended-item-${index}`}
                            notebook={notebook}
                        />
                    ))}
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
    )
}

ExtendedLibrarySidebarContent.displayName = 'ExtendedLibrarySidebarContent'
