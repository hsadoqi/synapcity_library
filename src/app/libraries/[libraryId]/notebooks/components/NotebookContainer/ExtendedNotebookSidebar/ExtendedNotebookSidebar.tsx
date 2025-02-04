import { Sidebar } from '@/components/ui/sidebar'
import { ExtendedNotebookContent } from './ExtendedNotebookContent'
import { ExtendedNotebookHeader } from './ExtendedNotebookHeader'

export default function ExtendedNotebookSidebar() {
    return (
        <Sidebar
            collapsible="none"
            className="hidden flex-1 sm:flex border-x-[1px] border-active-700 shadow-inner bg-active-100 dark:bg-active-900"
        >
            <ExtendedNotebookHeader />
            <ExtendedNotebookContent />
        </Sidebar>
    )
}
