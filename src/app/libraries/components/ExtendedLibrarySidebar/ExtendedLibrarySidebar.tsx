import { Sidebar } from '@/components/ui/sidebar'
import { SidebarItem } from '../LibrarySidebar/LibrarySidebarContent'
import { ExtendedLibraryHeader } from './ExtendedLibrarySidebarHeader'
import { ExtendedLibraryContent } from './ExtendedLibrarySidebarContent'
export default function ExtendedLibrarySidebar({
    activeItem,
    items,
    setActiveItem,
}: {
    activeItem: SidebarItem
    items: SidebarItem[]
    setActiveItem: (item: SidebarItem) => void
}) {
    return (
        <Sidebar collapsible="none" className="hidden flex-1 md:flex pt-4">
            <ExtendedLibraryHeader
                activeItem={activeItem}
                setActiveItem={setActiveItem}
                items={items}
            />
            <ExtendedLibraryContent items={items} />
        </Sidebar>
    )
}

ExtendedLibrarySidebar.displayName = 'ExtendedLibrarySidebar'
