'use client'

import { SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar'
import { Icon } from '@/components'
import { Library } from '@/types/libraryData'
import { useLibraryStore } from '@/stores/library-store'
import { clsx } from 'clsx'
import Link from 'next/link'

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

    const hoverStyles = `hover:border-2 hover:border-${library.color}-500 transition-all ease-in-out duration-300`
    const activeStyles = isActive
        ? `shadow-inner border-2 border-active-500 bg-active-100 dark:stroke-white dark:text-active-100 stroke-1 dark:hover:text-white dark:bg-active-800 text-active-900`
        : ''

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
                asChild
                {...props}
            >
                <Link href={`/libraries/${library.id}`}>
                    <Icon icon={library.icon} />
                    <span aria-hidden="true" className="hidden">
                        {library.name}
                    </span>
                </Link>
            </SidebarMenuButton>
        </SidebarMenuItem>
    )
}

LibrarySidebarItem.displayName = 'LibrarySidebarItem'
