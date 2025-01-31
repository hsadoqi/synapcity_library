'use client'

import { SidebarContainer } from '@/components/Sidebar'
import { SidebarInset } from '@/components/ui/sidebar'
import { LibraryIconSidebar } from '../LibraryIconSidebar'
import { useEffect } from 'react'
import { useLibraryStore } from '@/stores/library-store'

export default function LibraryContainer({
    children,
}: {
    children: React.ReactNode
}) {
    const { loadLibraries } = useLibraryStore()

    useEffect(() => {
        loadLibraries()
    }, [loadLibraries])

    return (
        <SidebarContainer>
            <LibraryIconSidebar />
            <SidebarInset>{children}</SidebarInset>
        </SidebarContainer>
    )
}
