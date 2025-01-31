'use client'

import { LibrarySidebarItem } from '@/app/libraries/components/LibrarySidebar/LibrarySidebarContent/LibrarySidebarItem'
import { Button } from '@/components/ui'
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from '@/components/ui/sidebar'
import { useHeaderStore } from '@/stores/header-store'
import { useLibraryStore } from '@/stores/library-store'
import clsx from 'clsx'
import { PanelLeftCloseIcon, PanelLeftOpenIcon } from 'lucide-react'
import { useEffect } from 'react'

export default function LibraryIconSidebar({
    ...props
}: React.ComponentProps<typeof Sidebar>) {
    const { setOpen, open } = useSidebar()
    const {
        libraries,
        selectedLibrary,
        setLibrary,
        isSidebarOpen,
        toggleSidebar,
    } = useLibraryStore()
    const { isVisible } = useHeaderStore()
    console.log('LIBRARIES', libraries, selectedLibrary)

    useEffect(() => {
        if (isSidebarOpen) {
            setOpen(true)
        } else {
            setOpen(false)
        }
    }, [isSidebarOpen, open, setOpen])

    return (
        <Sidebar
            side="left"
            collapsible="icon"
            className="overflow-hidden [&>[data-sidebar=sidebar]]:flex-row"
            {...props}
        >
            <Sidebar
                collapsible="none"
                className={clsx(
                    'overflow-hidden !w-[calc(var(--sidebar-width-icon)_+_1px)] border-r',
                    {
                        'z-50': !isVisible,
                    },
                )}
                {...props}
            >
                <SidebarHeader>
                    <SidebarMenu className="pt-3">
                        <SidebarMenuItem>
                            <SidebarMenuButton
                                size="lg"
                                asChild
                                className="md:p-0"
                            >
                                <Button
                                    onClick={toggleSidebar}
                                    className="h-full w-full"
                                >
                                    <div className="flex aspect-square size-9 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                        {open ? (
                                            <PanelLeftCloseIcon className="size-4" />
                                        ) : (
                                            <PanelLeftOpenIcon className="size-4" />
                                        )}
                                    </div>
                                </Button>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarHeader>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupContent className="px-1.5 md:px-0">
                            <SidebarMenu>
                                {libraries.map((library, index) => (
                                    <LibrarySidebarItem
                                        key={`item-${index}`}
                                        library={library}
                                        isActive={
                                            selectedLibrary?.id === library.id
                                        }
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
            </Sidebar>
        </Sidebar>
    )
}
