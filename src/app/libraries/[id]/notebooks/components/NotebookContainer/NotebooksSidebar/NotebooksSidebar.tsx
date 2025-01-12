'use client'

import { Button } from '@/components'
import {
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    useSidebar,
} from '@/components/ui/sidebar'
import { Book, PenIcon } from 'lucide-react'
import { ExtendedNotebooksContainer } from '../ExtendedNotebooksContainer'

export default function NotebooksSidebar({
    ...props
}: React.ComponentProps<typeof Sidebar>) {
    const { toggleSidebar } = useSidebar()

    return (
        <Sidebar
            side="left"
            collapsible="icon"
            className="overflow-hidden [&>[data-sidebar=sidebar]]:flex-row"
            {...props}
        >
            <Sidebar
                collapsible="none"
                className="!w-[calc(var(--sidebar-width-icon)_+_1px)] border-r pt-6"
            >
                <SidebarHeader>
                    <SidebarMenu>
                        <SidebarMenuButton size="default" asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="flex aspect-square size-6 items-center justify-center rounded-lg"
                                onClick={() => toggleSidebar()}
                            >
                                <Book />
                            </Button>
                        </SidebarMenuButton>
                    </SidebarMenu>
                </SidebarHeader>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupContent className="px-1.5 md:px-0">
                            <SidebarMenu>
                                <SidebarMenuButton>
                                    <PenIcon />
                                </SidebarMenuButton>
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
            </Sidebar>
            <ExtendedNotebooksContainer />
        </Sidebar>
    )
}
