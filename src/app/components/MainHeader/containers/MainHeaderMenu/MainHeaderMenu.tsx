'use client'

import { Button } from '@/components'
import { ThemeWrapper } from '@/components/theming/ThemeWrapper'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useUIStore } from '@/providers/ui-store-provider'
import { LockOpen, Lock, LucideMenu as HamburgerMenu } from 'lucide-react'
import Link from 'next/link'

export default function MainHeaderMenu() {
    const { isHeaderLocked, toggleHeaderLock } = useUIStore((state) => state)

    return (
        <div className="flex justify-center items-center gap-2">
            <ThemeWrapper />
            <Button
                size="icon"
                variant={isHeaderLocked ? 'secondary' : 'ghost'}
                onClick={() => toggleHeaderLock()}
            >
                {isHeaderLocked ? <Lock /> : <LockOpen />}
            </Button>
            <div className="md:hidden flex">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button size="icon">
                            <HamburgerMenu />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
                        <DropdownMenuItem>
                            <Link href="/">Home</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href="/projects">Projects</Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}
