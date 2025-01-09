import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'
import { NoteSidebar } from '../NoteSidebar'

export default function NoteContainer({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        // <div className="flex">
        <SidebarProvider>
            <SidebarInset>{children}</SidebarInset>
            <NoteSidebar side="right" />
        </SidebarProvider>
        // </div>
    )
}
