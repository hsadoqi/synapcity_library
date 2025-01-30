'use client'

import { SidebarProvider } from '@/components/ui/sidebar'

export default function SidebarContainer({
    children,
}: {
    children: React.ReactNode
}) {
    return <SidebarProvider>{children}</SidebarProvider>
}
