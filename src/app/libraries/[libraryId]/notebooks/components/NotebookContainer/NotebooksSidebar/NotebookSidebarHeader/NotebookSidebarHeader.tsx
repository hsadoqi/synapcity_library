'use client'

import { SidebarMenu, SidebarHeader } from '@/components/ui/sidebar'
import LibrarySidebarButton from '../LibrarySidebarButton'

export default function NotebookSidebarHeader() {
    return (
        <SidebarHeader>
            <SidebarMenu>
                <LibrarySidebarButton />
            </SidebarMenu>
        </SidebarHeader>
    )
}
