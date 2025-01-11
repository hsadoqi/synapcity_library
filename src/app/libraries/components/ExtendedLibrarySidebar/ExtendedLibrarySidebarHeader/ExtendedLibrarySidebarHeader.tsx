'use client'

import { SidebarHeader } from '@/components/ui/sidebar'
import { Label } from '@radix-ui/react-dropdown-menu'
import { SidebarItem } from '../../LibrarySidebar/LibrarySidebarContent'
import { ChevronDownCircle, ChevronLeftCircle } from 'lucide-react'
import { Button } from '@/components'
import { useState } from 'react'
import { clsx } from 'clsx'

export default function ExtendedLibrarySidebarHeader({
    items,
    activeItem,
    setActiveItem,
}: {
    items: SidebarItem[]
    activeItem: SidebarItem
    setActiveItem: (item: SidebarItem) => void
}) {
    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = () => {
        setIsOpen((prev) => !prev)
    }

    return (
        <SidebarHeader className="border-b">
            <div className="flex flex-col w-full h-full items-center justify-between overflow-hidden pb-2">
                <Label className="flex items-center text-sm justify-between flex-1 w-full">
                    <Button
                        onClick={toggleOpen}
                        variant="ghost"
                        size="icon"
                        className="h-full w-full px-2"
                    >
                        <div className="text-base font-medium text-foreground flex w-full items-center justify-between py-4">
                            <span className="leading-none">
                                {activeItem.title}
                            </span>
                            {isOpen ? (
                                <ChevronDownCircle className="h-5 w-5 shrink-0" />
                            ) : (
                                <ChevronLeftCircle className="h-5 w-5 shrink-0" />
                            )}
                        </div>
                    </Button>
                </Label>
                <div
                    className={`transition-all duration-300 ease-in-out overflow-y-auto scrollbar-sm w-full border shadow-inner ${
                        isOpen
                            ? 'max-h-20 opacity-100 visible'
                            : 'max-h-0 opacity-0 invisible'
                    }`}
                >
                    {items.map((item, index) => (
                        <Button
                            key={`search-item-${index}`}
                            onClick={() => setActiveItem(item as SidebarItem)}
                            variant={item === activeItem ? 'inner' : 'ghost'}
                            className={clsx('justify-start w-full', {
                                active: item === activeItem,
                            })}
                        >
                            {item.title}
                        </Button>
                    ))}
                </div>
            </div>
        </SidebarHeader>
    )
}

ExtendedLibrarySidebarHeader.displayName = 'ExtendedLibrarySidebarHeader'
