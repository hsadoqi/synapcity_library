'use client'

import * as React from 'react'
import { Sidebar } from '@/components/ui/sidebar'
import { SidebarHeader } from './LibrarySidebarHeader'
import { SidebarContent, SidebarItem } from './LibrarySidebarContent'
import { ExtendedLibrarySidebar } from '../ExtendedLibrarySidebar'
import items from './libraries.json'

export const defaultItem: SidebarItem = {
    id: '0',
    title: 'All Libraries',
    icon: 'Command',
    slug: '#',
}

export default function LibrarySidebar({
    ...props
}: React.ComponentProps<typeof Sidebar>) {
    const [activeItem, setActiveItem] = React.useState<SidebarItem>(defaultItem)

    return (
        <Sidebar
            side="left"
            collapsible="icon"
            className="overflow-hidden [&>[data-sidebar=sidebar]]:flex-row"
            {...props}
        >
            <Sidebar
                collapsible="none"
                className="!w-[calc(var(--sidebar-width-icon)_+_1px)] border-r pt-4"
            >
                <SidebarHeader
                    item={activeItem}
                    setActiveItem={setActiveItem}
                />
                <SidebarContent
                    activeItem={activeItem as SidebarItem}
                    setActiveItem={setActiveItem}
                />
            </Sidebar>
            <ExtendedLibrarySidebar
                activeItem={activeItem as SidebarItem}
                items={items as SidebarItem[]}
                setActiveItem={setActiveItem}
            />
        </Sidebar>
    )
}

LibrarySidebar.displayName = 'LibrarySidebar'
