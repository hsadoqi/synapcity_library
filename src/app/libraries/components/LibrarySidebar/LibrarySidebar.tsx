'use client'

import * as React from 'react'
import { Sidebar } from '@/components/ui/sidebar'

export default function LibrarySidebar({
    ...props
}: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar
            side="left"
            collapsible="icon"
            className="overflow-hidden [&>[data-sidebar=sidebar]]:flex-row"
            {...props}
        >
            Sidebar
        </Sidebar>
    )
}
