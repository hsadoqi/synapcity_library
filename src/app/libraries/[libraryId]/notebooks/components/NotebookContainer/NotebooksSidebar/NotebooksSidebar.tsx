import { Sidebar } from '@/components/ui/sidebar'
import { SidebarHeader } from './NotebookSidebarHeader'
import { SidebarContent } from './NotebookSidebarContent'
import { ExtendedNotebookSidebar } from '../ExtendedNotebookSidebar'

export default function NotebooksSidebar({
    ...props
}: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar
            side="left"
            collapsible="icon"
            className="overflow-hidden [&>[data-sidebar=sidebar]]:flex-row"
            {...props}
        >
            <Sidebar
                collapsible="none"
                className="!w-[calc(var(--sidebar-width-icon)_+_1px)] pt-4 bg-active-50 dark:bg-active-950 shadow-sm"
            >
                <SidebarHeader />
                <SidebarContent />
            </Sidebar>
            <ExtendedNotebookSidebar />
        </Sidebar>
    )
}
