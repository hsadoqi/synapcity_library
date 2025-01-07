'use client'

import { usePathname } from 'next/navigation'
import { LinkButtonProps, LinkButton } from '@/components'
import clsx from 'clsx'

export default function NavigationItem({
    href,
    className,
    ...props
}: LinkButtonProps) {
    const pathname = usePathname()
    return (
        <LinkButton
            variant={pathname === href ? 'inner' : 'ghost'}
            href={href}
            className={clsx(
                'w-full transition-all duration-300 ease-in-out',
                className,
            )}
            {...props}
        />
    )
}
