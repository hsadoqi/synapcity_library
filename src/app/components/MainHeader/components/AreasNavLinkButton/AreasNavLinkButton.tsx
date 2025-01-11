'use client'

import { LinkButton } from '@/components'
import { usePathname } from 'next/navigation'

export default function AreasNavLinkButton({
    item,
    slug,
}: {
    item: { label: string; slug: string }
    slug: string
}) {
    const pathname = usePathname()
    console.log(item, slug)
    return (
        <div className="w-full min-w-32">
            <LinkButton
                href={slug}
                label={item.label as string}
                variant={pathname.endsWith(slug) ? 'inner' : 'link'}
                isActive={pathname.endsWith(slug)}
                className="w-full flex-1 transition-all duration-300 ease-in-out"
            />
        </div>
    )
}
