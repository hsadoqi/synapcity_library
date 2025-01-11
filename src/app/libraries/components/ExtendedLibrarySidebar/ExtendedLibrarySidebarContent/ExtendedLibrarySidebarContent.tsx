import {
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarInput,
} from '@/components/ui/sidebar'
import { SidebarItem } from '../../LibrarySidebar/LibrarySidebarContent'

export default function ExtendedLibrarySidebarContent({
    items,
}: {
    items: SidebarItem[]
}) {
    return (
        <SidebarContent>
            <SidebarGroup className="px-0">
                <div className="w-full flex justify-center border-b pb-2">
                    <SidebarInput
                        placeholder="Type to search..."
                        className="w-full p-4 mx-2"
                    />
                </div>
                <SidebarGroupContent>
                    {items?.map((item, index) => (
                        <a
                            href="#"
                            key={`extended-item-${index}`}
                            className="flex flex-col items-start gap-2 whitespace-nowrap border-b p-4 text-sm leading-tight last:border-b-0 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                        >
                            <div className="flex w-full items-center gap-2">
                                <span>{item.title}</span>{' '}
                            </div>
                            <span className="line-clamp-2 w-[260px] whitespace-break-spaces text-xs">
                                Hello
                            </span>
                        </a>
                    ))}
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
    )
}

ExtendedLibrarySidebarContent.displayName = 'ExtendedLibrarySidebarContent'
