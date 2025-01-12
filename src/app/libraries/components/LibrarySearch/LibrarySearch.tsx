'use client'

import { SidebarInput } from '@/components/ui/sidebar'
import { useState, useEffect } from 'react'
import { useNotebookStore } from '@/stores/notebook-store'

export default function LibrarySearch() {
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
        <div className="w-full flex justify-center pt-2">
            <SidebarInput
                placeholder="Type to search..."
                className="w-full p-4 px-4 mx-8"
                onChange={(e) =>
                    handleInputChange(e.target.value.toLowerCase())
                }
            />
        </div>
    )
}
