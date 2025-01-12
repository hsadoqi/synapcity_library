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
import { useLibraryStore } from '@/stores/library-store'

export type SidebarItem = {
    id: string
    title: string
    icon: keyof typeof Lucide.icons
    slug: string
}

export default function LibrarySidebarContent() {
    const { setOpen } = useSidebar()
    const { libraries, selectedLibrary, setLibrary } = useLibraryStore()

    return (
        <SidebarContent>
            <SidebarGroup>
                <SidebarGroupContent className="px-1.5 md:px-0">
                    <SidebarMenu>
                        {libraries.map((library, index) => (
                            <LibrarySidebarItem
                                key={`item-${index}`}
                                library={library}
                                isActive={selectedLibrary?.id === library.id}
                                onClick={() => {
                                    setLibrary(library)
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
