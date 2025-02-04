import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'
import { NotebooksSidebar } from './NotebooksSidebar'
import PageLayoutContainer from '@/components/PageLayoutContainer/PageLayoutContainer'

export default function NotebookContainer({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <SidebarProvider>
            <NotebooksSidebar />
            <SidebarInset>
                <PageLayoutContainer>{children}</PageLayoutContainer>
            </SidebarInset>
        </SidebarProvider>
    )
}
