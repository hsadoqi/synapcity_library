import { SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar'
import { SidebarItem } from '../LibrarySidebarContent'
import Icon from './Icon'

interface SidebarContentProps {
    item: SidebarItem
    isActive?: boolean
    onClick?: () => void
}

export default function LibrarySidebarItem({
    item,
    ...props
}: SidebarContentProps) {
    return (
        <SidebarMenuItem>
            <SidebarMenuButton
                tooltip={{
                    children: item.title,
                    hidden: false,
                }}
                className="px-2.5 md:px-2"
                {...props}
            >
                <Icon name={item.icon} {...item} />
                <span>{item.title}</span>
            </SidebarMenuButton>
        </SidebarMenuItem>
    )
}

LibrarySidebarItem.displayName = 'LibrarySidebarItem'
