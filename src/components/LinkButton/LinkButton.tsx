'use client'

import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'
import { buttonVariants } from '@/components'
import { VariantProps } from 'class-variance-authority'
import { Slot } from '@radix-ui/react-slot'

export interface LinkButtonProps
    extends LinkProps,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean
    label: string
    children?: React.ReactNode
    slug?: string
    className?: string
    onClick?: () => void
    isActive?: boolean
}

export default function LinkButton({
    label,
    variant = 'link',
    children,
    size = 'default',
    className = '',
    asChild = false,
    isActive = false,
    ...props
}: LinkButtonProps) {
    const Comp = asChild ? Slot : Link
    return (
        <Comp
            className={clsx(buttonVariants({ variant, size, className }), {
                active: isActive,
            })}
            {...props}
        >
            {children || label}
        </Comp>
    )
}
