'use client'

import { SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar'
import { Icon } from '@/components'
import { Notebook } from '@/types/libraryData'
import { useNotebookStore } from '@/stores/notebook-store'
import { clsx } from 'clsx'
import Link from 'next/link'
import { useLibraryStore } from '@/stores/library-store'

interface SidebarContentProps {
    notebook?: Notebook
    isActive?: boolean
    onClick?: () => void
}

export default function NotebookSidebarItem({
    notebook,
    isActive,
    ...props
}: SidebarContentProps) {
    const { setNotebook } = useNotebookStore()
    const { selectedLibrary } = useLibraryStore()

    if (!notebook) return null

    const hoverStyles = `hover:border-2 hover:border-${selectedLibrary?.color}-${notebook.shade} transition-all ease-in-out duration-300`
    const activeStyles = isActive
        ? `border-2 border-active-500 bg-active-100 dark:stroke-white dark:text-active-100 stroke-1 dark:hover:text-white dark:bg-active-800 text-active-900`
        : ''

    return (
        <SidebarMenuItem>
            <SidebarMenuButton
                tooltip={{
                    children: notebook.name,
                    hidden: false,
                }}
                variant={isActive ? 'outline' : 'default'}
                className={clsx('inline-flex', hoverStyles, activeStyles)}
                onClick={() => setNotebook(notebook)}
                asChild
                {...props}
            >
                <Link href={`/libraries/${selectedLibrary?.id}/${notebook.id}`}>
                    <Icon icon={notebook.icon!} />
                    <span aria-hidden="true" className="hidden">
                        {notebook.name}
                    </span>
                </Link>
            </SidebarMenuButton>
        </SidebarMenuItem>
    )
}

NotebookSidebarItem.displayName = 'NotebookSidebarItem'
