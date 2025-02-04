'use client'

import * as React from 'react'
import { Sidebar, useSidebar } from '@/components/ui/sidebar'
import IconNoteSidebar, { Item } from './IconNoteSidebar'
import MainNoteSidebar from './MainNoteSidebar'
import { data } from './data'

export default function NoteSidebar({
    ...props
}: React.ComponentProps<typeof Sidebar>) {
    const [activeItem, setActiveItem] = React.useState<Item>(
        data.navMain[0] as Item,
    )
    const [mails, setMails] = React.useState(data.mails)
    const { setOpen } = useSidebar()
    return (
        <Sidebar
            collapsible="icon"
            className="overflow-hidden [&>[data-sidebar=sidebar]]:flex-row"
            {...props}
        >
            <IconNoteSidebar
                setActiveItem={setActiveItem}
                activeItem={activeItem}
                mails={mails}
                setMails={setMails}
                setOpen={setOpen}
            />
            <MainNoteSidebar activeItem={activeItem} mails={mails} />
        </Sidebar>
    )
}
