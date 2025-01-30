import { SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar'
import Icon from './Icon'
import { Library } from '@/types/libraryData'
import { useLibraryStore } from '@/stores/library-store'
import { clsx } from 'clsx'
import { Color } from '@/types'

interface SidebarContentProps {
    library: Library
    isActive?: boolean
    onClick?: () => void
}

export default function LibrarySidebarItem({
    library,
    isActive,
    ...props
}: SidebarContentProps) {
    const { setLibrary } = useLibraryStore()

    const generateActiveStyles = (color: Color) =>
        `border-2 border-${color}-500 bg-${color}-700 text-white dark:bg-${color}-300 dark:text-${color}-900`
    const hoverStyles = `hover:border-2 hover:border-${library.color}-500 transition-all ease-in-out duration-300`
    const activeStyles = isActive ? generateActiveStyles(library.color) : ''
    // console.log('active styles', activeStyles)
    // const activeStyles = 'border-2 border-blue-500 bg-blue-700 text-white dark:bg-blue-300 dark:text-blue-900';

    return (
        <SidebarMenuItem>
            <SidebarMenuButton
                tooltip={{
                    children: library.name,
                    hidden: false,
                }}
                variant={isActive ? 'outline' : 'default'}
                className={clsx('inline-flex', hoverStyles, activeStyles)}
                onClick={() => setLibrary(library)}
                {...props}
            >
                <Icon icon={library.icon} />
                <span aria-hidden="true" className="hidden">
                    {library.name}
                </span>
            </SidebarMenuButton>
        </SidebarMenuItem>
    )
}

LibrarySidebarItem.displayName = 'LibrarySidebarItem'
