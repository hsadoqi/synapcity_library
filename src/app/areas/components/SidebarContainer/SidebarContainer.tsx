import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'

export default function SidebarContainer({
    sidebar,
    children,
}: {
    sidebar: React.ReactNode
    children: React.ReactNode
}) {
    return (
        <SidebarProvider>
            {sidebar}
            <SidebarInset>{children}</SidebarInset>
        </SidebarProvider>
    )
}
