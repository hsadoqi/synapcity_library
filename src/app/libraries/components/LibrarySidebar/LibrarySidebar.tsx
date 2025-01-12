'use client'

import * as React from 'react'
import { Sidebar } from '@/components/ui/sidebar'
import { SidebarHeader } from './LibrarySidebarHeader'
import { SidebarContent } from './LibrarySidebarContent'
import { ExtendedLibrarySidebar } from '../ExtendedLibrarySidebar'
import { useEffect } from 'react'
import { useLibraryStore } from '@/stores/library-store'
// import { useNotebookStore } from '@/stores/notebook-store'

export default function LibrarySidebar({
    ...props
}: React.ComponentProps<typeof Sidebar>) {
    const { loadLibraries } = useLibraryStore()

    useEffect(() => {
        loadLibraries()
    }, [loadLibraries])

    return (
        <Sidebar
            side="left"
            collapsible="icon"
            className="overflow-hidden [&>[data-sidebar=sidebar]]:flex-row"
            {...props}
        >
            <Sidebar
                collapsible="none"
                className="!w-[calc(var(--sidebar-width-icon)_+_1px)] border-r pt-6"
            >
                <SidebarHeader />
                <SidebarContent />
            </Sidebar>
            <ExtendedLibrarySidebar />
        </Sidebar>
    )
}

LibrarySidebar.displayName = 'LibrarySidebar'
