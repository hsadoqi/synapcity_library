'use client'

import { usePathname } from 'next/navigation'
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbSeparator,
    BreadcrumbPage,
} from '@/components/ui/breadcrumb'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useLibraryStore } from '@/stores/library-store'
import { useNotebookStore } from '@/stores/notebook-store'
import { useNoteStore } from '@/stores/note-store'
import { Library } from 'lucide-react'

export type BreadcrumbLabels = {
    [key: string]: { label: string; type?: string; id?: string; name?: string }
}

export default function BreadcrumbMenu({
    labels,
}: {
    labels?: BreadcrumbLabels
}) {
    const pathname = usePathname()
    const segments = pathname.split('/').filter(Boolean)
    const { libraries } = useLibraryStore()
    const { notebooks, setNotebook } = useNotebookStore()
    const { notes, setNote } = useNoteStore()

    useEffect(() => {
        if (
            pathname.startsWith('/libraries') &&
            !pathname.includes('/notebook-')
        ) {
            setNotebook(null)
            setNote(null)
        } else if (
            pathname.includes('/notebook-') &&
            !pathname.includes('/note-')
        ) {
            setNote(null)
        }
    }, [pathname, setNotebook, setNote])

    let pathAccumulator = '/libraries'

    const getItemById = (id?: string, type?: string) => {
        let item
        if (type === 'libraries') {
            item = libraries.find((library) => library.id === id)
        } else if (type === 'notebooks') {
            item = notebooks.find((notebook) => notebook.id === id)
        } else {
            item = notes.find((note) => note.id === id)
        }
        return item
    }

    return (
        <header className="w-full flex h-16 shrink-0 items-center justify-end gap-2 border-b border-active-700 px-4 pt-2 bg-active-300 dark:bg-active-900 flex-nowrap truncate line-clamp-2">
            <Breadcrumb>
                <BreadcrumbList>
                    {segments.map((segment, index) => {
                        const isLast = index === segments.length - 1
                        const labelData = labels?.[segment] ?? {
                            label: segment,
                        }

                        if (index === 1 && 'id' in labelData) {
                            pathAccumulator += `/${labelData.id}`
                        } else if (
                            index > 1 &&
                            'type' in labelData &&
                            'id' in labelData
                        ) {
                            pathAccumulator += `/${labelData.id}`
                        }

                        return isLast ? (
                            <BreadcrumbItem key={index}>
                                <BreadcrumbPage>
                                    {labelData.label}
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        ) : (
                            <React.Fragment key={index}>
                                <BreadcrumbItem className="hidden md:flex truncate">
                                    <Link href={pathAccumulator} passHref>
                                        {getItemById(
                                            labelData.id,
                                            labelData.type,
                                        )?.name || <Library />}
                                    </Link>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="hidden md:flex" />
                            </React.Fragment>
                        )
                    })}
                </BreadcrumbList>
            </Breadcrumb>
        </header>
    )
}
