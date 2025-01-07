'use client'

import { Button } from '@/components'
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { LucideMenu as HamburgerMenu } from 'lucide-react'
import Link from 'next/link'

export default function MainNavigationMenu() {
    return (
        <>
            <div className="hidden md:flex md:flex-1 transition-all opacity-0 md:opacity-100 duration-300 ease-in-out items-center">
                <nav className="flex items-center justify-evenly gap-16 mx-auto">
                    <Link href="/libraries">Library</Link>
                    <Link href="/projects">Projects</Link>
                    <Link href="/areas">Areas</Link>
                    <Link href="/resources">Resources</Link>
                    <Link href="/archives">Archives</Link>
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
                </nav>
            </div>
        </>
    )
}
