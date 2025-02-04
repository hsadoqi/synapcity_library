import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'
import LibrarySidebar from '../LibrarySidebar/LibrarySidebar'

export default function SidebarContainer({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <SidebarProvider>
            <LibrarySidebar />
            <SidebarInset>{children}</SidebarInset>
        </SidebarProvider>
    )
}
