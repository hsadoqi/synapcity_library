'use client'

import Link from 'next/link'

export default function MainNavigationMenu() {
    return (
        <div className="hidden md:flex md:flex-1 transition-all opacity-0 md:opacity-100 duration-300 ease-in-out items-center">
            <div className="flex items-center justify-evenly gap-16 mx-auto">
                <Link href="/libraries">Library</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/areas">Areas</Link>
                <Link href="/resources">Resources</Link>
                <Link href="/archives">Archives</Link>
            </div>
        </div>
    )
}
