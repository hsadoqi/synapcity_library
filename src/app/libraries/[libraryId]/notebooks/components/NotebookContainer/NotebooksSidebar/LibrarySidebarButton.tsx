'use client'

import { Button, Icon } from '@/components'
import {
    useSidebar,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar'
import { useLibraryStore } from '@/stores/library-store'
import { useNotebookStore } from '@/stores/notebook-store'
import { Command } from 'lucide-react'

export default function LibrarySidebarButton({
    showAll = false,
}: {
    showAll?: boolean
}) {
    const { toggleSidebar } = useSidebar()
    const { selectedLibrary } = useLibraryStore()
    const { selectedNotebook } = useNotebookStore()

    return (
        <SidebarMenuItem>
            <SidebarMenuButton
                size="lg"
                asChild
                className="md:h-8 md:p-0 z-[70] flex aspect-square size-8 items-center justify-center rounded-lg"
                tooltip={
                    showAll ? `Show All` : `Toggle ${selectedLibrary?.name}`
                }
            >
                <Button
                    variant="default"
                    size="icon"
                    className="flex aspect-square size-8 items-center justify-center rounded-lg bg-active-500"
                    onClick={() => {
                        if (selectedNotebook && !showAll) {
                            toggleSidebar()
                        }
                    }}
                >
                    {selectedLibrary && selectedLibrary?.icon ? (
                        <Icon icon={selectedLibrary?.icon} className="size-4" />
                    ) : (
                        <Command className="size-4" />
                    )}
                </Button>
            </SidebarMenuButton>
        </SidebarMenuItem>
    )
}
