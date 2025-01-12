'use client'

import {
    SidebarHeader,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarMenu,
    useSidebar,
} from '@/components/ui/sidebar'
import { Command } from 'lucide-react'
import { Button } from '@/components'

export default function LibrarySidebarHeader() {
    const { toggleSidebar } = useSidebar()
    return (
        <SidebarHeader>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton
                        size="lg"
                        asChild
                        className="md:h-8 md:p-0 z-[60] flex aspect-square size-8 items-center justify-center rounded-lg"
                    >
                        <Button
                            variant="default"
                            size="icon"
                            className="flex aspect-square size-8 items-center justify-center rounded-lg"
                            onClick={() => toggleSidebar()}
                        >
                            <Command className="size-4" />
                        </Button>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>
    )
}

LibrarySidebarHeader.displayName = 'LibrarySidebarHeader'
