import { Sidebar } from '@/components/ui/sidebar'
import { ExtendedLibraryHeader } from './ExtendedLibrarySidebarHeader'
import { ExtendedLibraryContent } from './ExtendedLibrarySidebarContent'

export default function ExtendedLibrarySidebar() {
    return (
        <Sidebar
            collapsible="none"
            className="hidden flex-1 sm:flex border-b border-active-700"
        >
            <ExtendedLibraryHeader />
            <ExtendedLibraryContent />
        </Sidebar>
    )
}

ExtendedLibrarySidebar.displayName = 'ExtendedLibrarySidebar'
