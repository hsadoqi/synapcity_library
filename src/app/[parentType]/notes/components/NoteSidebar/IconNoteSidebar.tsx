/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import * as React from 'react'
import { Command } from 'lucide-react'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from '@/components/ui/sidebar'
import { data } from './data'
import clsx from 'clsx'

export type Item = {
    title: string
    url: string
    icon: unknown
    isActive: boolean
}
type Mail = {
    name: string
    email: string
    subject: string
    teaser: string
    date: string
}

export interface SubSidebarProps {
    activeItem: any
    setActiveItem?: (item: any) => void
    mails?: Mail[]
    setMails?: (mails: Mail[]) => void
    setOpen?: (open: boolean) => void
}
export default function IconNoteSidebar({
    activeItem,
    setActiveItem,
    setMails,
    setOpen,
}: SubSidebarProps) {
    const { toggleSidebar } = useSidebar()

    if (!setActiveItem || !setMails || !setOpen) {
        return null
    }

    return (
        <Sidebar
            collapsible="none"
            className="!w-[calc(var(--sidebar-width-icon)_+_1px)] border-r"
        >
            <SidebarHeader>
                <SidebarMenu className={clsx({ 'pt-12': true })}>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            size="lg"
                            asChild
                            className="md:h-8 md:p-0 z-[60]"
                            onClick={() => toggleSidebar()}
                        >
                            <a href="#">
                                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                    <Command className="size-4" />
                                </div>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-semibold">
                                        Acme Inc
                                    </span>
                                    <span className="truncate text-xs">
                                        Enterprise
                                    </span>
                                </div>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent className="px-1.5 md:px-0">
                        <SidebarMenu>
                            {data.navMain.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        tooltip={{
                                            children: item.title,
                                            hidden: false,
                                        }}
                                        onClick={() => {
                                            setActiveItem(item)
                                            const mail = data.mails.sort(
                                                () => Math.random() - 0.5,
                                            )
                                            setMails(
                                                mail.slice(
                                                    0,
                                                    Math.max(
                                                        5,
                                                        Math.floor(
                                                            Math.random() * 10,
                                                        ) + 1,
                                                    ),
                                                ),
                                            )
                                            setOpen(true)
                                        }}
                                        isActive={
                                            activeItem.title === item.title
                                        }
                                        className="px-2.5 md:px-2"
                                    >
                                        <item.icon />
                                        <span>{item.title}</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>{/* <NavUser user={data.user} /> */}</SidebarFooter>
        </Sidebar>
    )
}
