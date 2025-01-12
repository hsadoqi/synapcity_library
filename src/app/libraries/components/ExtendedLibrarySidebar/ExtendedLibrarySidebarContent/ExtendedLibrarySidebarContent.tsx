'use client'

import {
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
} from '@/components/ui/sidebar'
import ExtendedLibrarySidebarItem from '../ExtendedLibrarySidebarItem/ExtendedLibrarySidebarItem'
// import LibrarySearch from '../../LibrarySearch/LibrarySearch'
import { useNotebookStore } from '@/stores/notebook-store'

export default function ExtendedLibrarySidebarContent() {
    const { filteredNotebooks } = useNotebookStore()
    return (
        <SidebarContent>
            <SidebarGroup>
                <SidebarGroupContent>
                    {filteredNotebooks.map((notebook, index) => (
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
