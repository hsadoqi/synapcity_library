'use client'
import { SidebarInput } from '@/components/ui/sidebar'
import { useEffect, forwardRef, useState } from 'react'
import clsx from 'clsx'

export interface SearchInputProps {
    filterData: (searchQuery: string) => void
    resetFilters: () => void
    show: boolean
}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
    ({ show, filterData, resetFilters }, ref) => {
        const [searchQuery, setSearchQuery] = useState('')

        useEffect(() => {
            if (!searchQuery || searchQuery.length < 2) {
                resetFilters()
            } else {
                filterData(searchQuery)
            }
        }, [filterData, resetFilters, searchQuery])

        const handleInputChange = (value: string) => {
            const sanitizedValue = value.replace(/[^a-zA-Z0-9\s]/g, '')
            setSearchQuery(sanitizedValue.trim().toLowerCase())
        }

        return (
            <div
                className={clsx(
                    'flex justify-center items-center transition-transform ease-in-out duration-500 w-full',
                    {
                        '-translate-y-full opacity-0': !show,
                        'translate-y-0 opacity-100': show,
                    },
                )}
            >
                <SidebarInput
                    ref={ref}
                    placeholder="Type to search..."
                    className="w-full px-4 bg-active-50 dark:bg-black/80 outline-active-500 focus-visible:ring-active-500"
                    onChange={(e) => handleInputChange(e.target.value)}
                />
            </div>
        )
    },
)

SearchInput.displayName = 'SearchInput'

export default SearchInput
