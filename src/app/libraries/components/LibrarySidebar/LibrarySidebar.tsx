'use client'

import * as React from 'react'
import { Sidebar } from '@/components/ui/sidebar'
import { SidebarHeader } from './LibrarySidebarHeader'
import { SidebarContent } from './LibrarySidebarContent'
import { ExtendedLibrarySidebar } from '../ExtendedLibrarySidebar'
import { useEffect, useRef } from 'react'
import { useLibraryStore } from '@/stores/library-store'

export default function LibrarySidebar({
    ...props
}: React.ComponentProps<typeof Sidebar>) {
    const { loadLibraries } = useLibraryStore()
    const sidebarRef = useRef<HTMLDivElement | null>(null)

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
                ref={sidebarRef}
                collapsible="none"
                className="!w-[calc(var(--sidebar-width-icon)_+_1px)] border-y border-active-50 dark:border-active-950 shadow-md pt-4"
            >
                <SidebarHeader />
                <SidebarContent />
            </Sidebar>
            <ExtendedLibrarySidebar />
        </Sidebar>
    )
}

LibrarySidebar.displayName = 'LibrarySidebar'
