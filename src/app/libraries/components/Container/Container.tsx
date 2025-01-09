import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'
import { NoteSidebar } from '../../../[parentType]/notes/components'

export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <NoteSidebar side="left" />
            <SidebarInset>{children}</SidebarInset>
        </SidebarProvider>
    )
}
