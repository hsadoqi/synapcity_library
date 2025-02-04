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
import { useNotebookStore } from '@/stores/notebook-store'

export type SidebarItem = {
    id: string
    title: string
    icon: keyof typeof Lucide.icons
    slug: string
}

export default function LibrarySidebarContent() {
    const { setOpen, open } = useSidebar()
    const { libraries, selectedLibrary, setLibrary } = useLibraryStore()
    const { setNotebook } = useNotebookStore()

    return (
        <SidebarContent>
            <SidebarGroup>
                <SidebarGroupContent className="px-1.5 md:px-0">
                    <SidebarMenu>
                        {libraries.map((library, index) => (
                            <LibrarySidebarItem
                                key={`item-${index}`}
                                library={library}
                                isActive={
                                    (selectedLibrary &&
                                        selectedLibrary?.id === library.id) ||
                                    (!selectedLibrary && library.default)
                                }
                                onClick={() => {
                                    setOpen(
                                        library !== selectedLibrary || !open,
                                    )
                                    setLibrary(library)
                                    if (library !== selectedLibrary) {
                                        setNotebook(null)
                                    }
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
