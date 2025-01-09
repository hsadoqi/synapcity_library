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
    link: string
    href: string
    className?: string
}

export default function LinkButton({
    link,
    href,
    variant = 'link',
    size = 'default',
    className = '',
    asChild = false,
    ...props
}: LinkButtonProps) {
    const Comp = asChild ? Slot : Link
    return (
        <Comp
            href={href}
            className={clsx(buttonVariants({ variant, size, className }))}
            {...props}
        >
            {link}
        </Comp>
    )
}
