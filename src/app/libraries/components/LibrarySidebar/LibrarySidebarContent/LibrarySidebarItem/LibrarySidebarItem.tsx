import { SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar'
import Icon from './Icon'
import { Library } from '@/types/libraryData'
import { useLibraryStore } from '@/stores/library-store'

interface SidebarContentProps {
    library: Library
    isActive?: boolean
    onClick?: () => void
}

export default function LibrarySidebarItem({
    library,
    ...props
}: SidebarContentProps) {
    const { setLibrary } = useLibraryStore()
    return (
        <SidebarMenuItem>
            <SidebarMenuButton
                tooltip={{
                    children: library.name,
                    hidden: false,
                }}
                className="px-2.5 md:px-2"
                onClick={() => setLibrary(library)}
                {...props}
            >
                <Icon icon={library.icon} />
                <span>{library.name}</span>
            </SidebarMenuButton>
        </SidebarMenuItem>
    )
}

LibrarySidebarItem.displayName = 'LibrarySidebarItem'
