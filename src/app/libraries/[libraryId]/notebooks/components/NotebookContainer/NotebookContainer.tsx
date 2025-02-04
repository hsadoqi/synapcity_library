import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'
import { NotebooksSidebar } from './NotebooksSidebar'

export default function NotebookContainer({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <SidebarProvider>
            <NotebooksSidebar />
            <SidebarInset>{children}</SidebarInset>
        </SidebarProvider>
    )
}
