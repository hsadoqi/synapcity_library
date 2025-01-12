import { Sidebar } from '@/components/ui/sidebar'
// import { SidebarItem } from '../LibrarySidebar/LibrarySidebarContent'
import { ExtendedLibraryHeader } from './ExtendedLibrarySidebarHeader'
import { ExtendedLibraryContent } from './ExtendedLibrarySidebarContent'
// import { useLibraryStore } from '@/stores/library-store'
export default function ExtendedLibrarySidebar() {
    return (
        <Sidebar collapsible="none" className="hidden flex-1 md:flex pt-4">
            <ExtendedLibraryHeader />
            <ExtendedLibraryContent />
        </Sidebar>
    )
}

ExtendedLibrarySidebar.displayName = 'ExtendedLibrarySidebar'
