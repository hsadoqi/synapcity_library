'use client'

import { Notebook } from '@/types/libraryData'
import { useLibraryStore } from '@/stores/library-store'
import { Badge } from '@/components/ui/badge'

export default function ExtendedLibrarySidebarItem({
    notebook,
}: {
    notebook: Notebook
}) {
    const { libraries, setLibrary } = useLibraryStore()
    const foundLibrary = libraries.find((lib) => lib.id === notebook.libraryId)

    return (
        <div className="flex flex-col items-start gap-2 whitespace-nowrap border-b p-4 text-sm leading-tight hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
            <div className="flex w-full items-center gap-2">
                <span>{notebook.name}</span>{' '}
                <Badge
                    variant="outline"
                    className="cursor-pointer hover:shadow-sm"
                    onClick={() => setLibrary(foundLibrary!)}
                >
                    {foundLibrary?.name}
                </Badge>
            </div>
            <span className="line-clamp-2 w-[260px] whitespace-break-spaces text-xs">
                Hello
            </span>
        </div>
    )
}

ExtendedLibrarySidebarItem.displayName = 'ExtendedLibrarySidebarItem'
