import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'
import { NoteSidebar } from '../NoteSidebar'

export default function NoteContainer({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <SidebarProvider>
            <SidebarInset>{children}</SidebarInset>
            <NoteSidebar side="right" />
        </SidebarProvider>
    )
}
