'use client'

import {
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    useSidebar,
} from '@/components/ui/sidebar'
import { LibrarySidebarItem } from './LibrarySidebarItem'
import type Lucide from 'lucide-react'
import items from '../libraries.json'

export type SidebarItem = {
    id: string
    title: string
    icon: keyof typeof Lucide.icons
    slug: string
}

export default function LibrarySidebarContent({
    activeItem,
    setActiveItem,
}: {
    activeItem: SidebarItem
    setActiveItem: (item: SidebarItem) => void
}) {
    const { setOpen } = useSidebar()
    return (
        <SidebarContent>
            <SidebarGroup>
                <SidebarGroupContent className="px-1.5 md:px-0">
                    <SidebarMenu>
                        {(items as SidebarItem[]).map((item, index) => (
                            <LibrarySidebarItem
                                key={`item-${index}`}
                                item={item}
                                isActive={activeItem === item}
                                onClick={() => {
                                    setActiveItem(item)
                                    setOpen(true)
                                }}
                            />
                        ))}
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
    )
}

LibrarySidebarContent.displayName = 'LibrarySidebarContent'
