'use client'

import { usePathname } from 'next/navigation'
import {
    type LinkButtonProps,
    LinkButton,
    Button,
    type ButtonProps,
} from '@/components'
import clsx from 'clsx'
import { Area } from '@/stores/areas-store'

export type NavigationItemProps = Area & {
    className?: string
    children?: React.ReactNode
} & (
        | {
              asButton?: true
              onClick?: () => void
              slug?: string
              props?: ButtonProps
          }
        | {
              asButton?: false
              onClick?: () => void
              slug?: string
              props?: LinkButtonProps
          }
    )

export default function NavigationItem({
    asButton = false,
    label,
    children,
    onClick: handleClick,
    slug,
    className,
}: NavigationItemProps) {
    const pathname = usePathname()
    const isActive = pathname.startsWith(slug as string)
    const sharedClassName = clsx(
        'min-w-32 w-32 flex-1 transition-all duration-300 ease-in-out',
        className,
    )

    return handleClick && asButton ? (
        <Button
            variant={isActive ? 'inner' : 'ghost'}
            onClick={handleClick}
            className={sharedClassName}
        >
            {label}
        </Button>
    ) : (
        <LinkButton
            variant={isActive ? 'inner' : 'ghost'}
            onClick={handleClick}
            href={slug as string}
            label={label}
            className={sharedClassName}
        >
            {children}
        </LinkButton>
    )
}
