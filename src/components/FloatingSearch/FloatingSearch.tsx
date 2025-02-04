'use client'

import { Search } from 'lucide-react'
import { Button } from '../ui'
import clsx from 'clsx'
import { SearchInput } from './SearchInput'
import { useRef, useState, useEffect, useCallback } from 'react'

interface FloatingSearchProps {
    variant?:
        | 'default'
        | 'ghost'
        | 'reverse'
        | 'destructive'
        | 'outline'
        | 'secondary'
        | 'inner'
        | 'link'
    className?: string
    filterData: (searchQuery: string) => void
    resetFilters: () => void
}

export default function FloatingSearch({
    variant = 'ghost',
    className = '',
    ...props
}: FloatingSearchProps) {
    const wrapperRef = useRef<HTMLDivElement | null>(null)
    const searchRef = useRef<HTMLInputElement | null>(null)
    const [showSearch, setShowSearch] = useState(false)

    const toggleSearch = useCallback(
        (value?: boolean) => setShowSearch((prev) => value || !prev),
        [],
    )

    useEffect(() => {
        if (showSearch && searchRef.current) {
            searchRef.current.focus()
        }
    }, [showSearch])

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(e.target as Node) &&
                showSearch
            ) {
                toggleSearch(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () =>
            document.removeEventListener('mousedown', handleClickOutside)
    }, [showSearch, toggleSearch])

    return (
        <div
            ref={wrapperRef}
            className="flex flex-col items-center justify-around w-full py-1 relative"
        >
            <div
                className={clsx({
                    'absolute top-0 right-2 translate-all duration-500 delay-300 ease-linear':
                        showSearch,
                })}
            >
                <Button
                    onClick={() => toggleSearch()}
                    variant={variant}
                    size="icon"
                    className={clsx(
                        'absolute top-50 right-2 bg-transparent hover:text-active-500 hover:bg-transparent border-none hover:scale-125 transition-transform duration-300 ease-in-out z-50',
                        'inline-flex items-center justify-around w-full py-1',
                        className,
                    )}
                >
                    <Search />
                </Button>
            </div>
            <SearchInput show={showSearch} ref={searchRef} {...props} />
        </div>
    )
}
