'use client'

import { SidebarInput } from '@/components/ui/sidebar'
import { useState, useEffect, RefObject } from 'react'
import { useNotebookStore } from '@/stores/notebook-store'
import clsx from 'clsx'

export default function SearchNotebooks({
    ref,
    show = false,
}: {
    ref: RefObject<HTMLInputElement | null>
    show: boolean
}) {
    const { filterNotebooks, resetFilters } = useNotebookStore()
    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {
        const query = searchQuery.trim()
        if (!query || query.length < 2) {
            resetFilters()
            return
        }

        filterNotebooks(query)
    }, [filterNotebooks, searchQuery, resetFilters])

    const handleInputChange = (value: string) => {
        const sanitizedValue = value.replace(/[^a-zA-Z0-9\s]/g, '')
        const formattedValue = sanitizedValue.trim().toLowerCase()
        setSearchQuery(formattedValue)
    }

    return (
        <div
            className={clsx(
                'flex justify-center items-center transition-transform ease-in-out duration-500',
                {
                    '-translate-y-full opacity-0': !show,
                    'translate-y-0 opacity-100': show,
                },
            )}
        >
            <SidebarInput
                ref={ref}
                placeholder="Type to search..."
                className={clsx(
                    'w-full px-8 bg-active-50 dark:bg-black/80 outline-active-500 focus-visible:ring-active-500',
                )}
                onChange={(e) =>
                    handleInputChange(e.target.value.toLowerCase())
                }
            />
        </div>
    )
}
