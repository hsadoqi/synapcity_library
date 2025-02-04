'use client'

import { usePathname } from 'next/navigation'
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    BreadcrumbPage,
} from '@/components/ui/breadcrumb'
import React from 'react'

export default function BreadcrumbMenu() {
    const pathname = usePathname()
    const segments = pathname.split('/').filter(Boolean)

    return (
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <Breadcrumb>
                <BreadcrumbList>
                    {segments.map((segment, index) => {
                        const isLastIndex = index === segments.length - 1
                        const path = segments.slice(0, index + 1).join('/')

                        return isLastIndex ? (
                            <BreadcrumbItem key={`item-${index}`}>
                                <BreadcrumbPage>{segment}</BreadcrumbPage>
                            </BreadcrumbItem>
                        ) : (
                            <React.Fragment key={`item-${index}`}>
                                <BreadcrumbItem className="hidden md:flex">
                                    <BreadcrumbLink href={`/${path}`}>
                                        {segment}
                                    </BreadcrumbLink>
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
