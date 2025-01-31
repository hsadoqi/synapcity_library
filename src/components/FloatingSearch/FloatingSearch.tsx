'use client'

import { Search } from 'lucide-react'
import { Button } from '../ui'
import clsx from 'clsx'
import { SearchNotebooksInput } from './SearchInput'
import { useRef, useState, useEffect } from 'react'

export default function FloatingSearch({
    variant = 'ghost',
    className = '',
    notebooks = false,
    notes = false,
}: {
    variant?:
        | 'default'
        | 'ghost'
        | 'reverse'
        | 'destructive'
        | 'outline'
        | 'secondary'
        | 'inner'
        | 'link'
        | null
        | undefined
    className?: string
    notebooks?: boolean
    notes?: boolean
}) {
    const wrapperRef = useRef<HTMLDivElement | null>(null)
    const searchRef = useRef<HTMLInputElement | null>(null)
    const [showSearch, setShowSearch] = useState(false)

    useEffect(() => {
        if (showSearch && searchRef.current) {
            searchRef.current.focus()
        }
    }, [showSearch])

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(e.target as Node)
            ) {
                console.log('show search', showSearch)
                setShowSearch(false)
                console.log('show search after', showSearch)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () =>
            document.removeEventListener('mousedown', handleClickOutside)
    }, [showSearch])

    const toggleSearch = () => {
        setShowSearch((prev) => !prev)
    }

    return (
        <div
            ref={wrapperRef}
            className="inline-flex items-center justify-around w-full py-1"
        >
            <Button
                onClick={() => toggleSearch()}
                variant={variant}
                size="icon"
                className={clsx(
                    'absolute top-50 right-2 bg-transparent hover:text-active-500 hover:bg-transparent border-none hover:scale-125 transition-transform duration-300 ease-in-out z-50',
                    className,
                )}
            >
                <Search />
            </Button>
            <SearchNotebooksInput
                ref={searchRef}
                show={showSearch}
                notebooks={notebooks}
                notes={notes}
            />
        </div>
    )
}
