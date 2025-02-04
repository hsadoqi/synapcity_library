'use client'

import { useHeaderStore } from '@/stores/header-store'
import { useState } from 'react'
import clsx from 'clsx'

export default function HoverWrapper({
    children,
}: {
    children: React.ReactNode
}) {
    const [leaveTimeout, setLeaveTimeout] = useState<NodeJS.Timeout | null>(
        null,
    )

    const { setIsHovered, isLocked, isVisible, setIsVisible } = useHeaderStore()

    const handleMouseEnter = () => {
        if (leaveTimeout) {
            clearTimeout(leaveTimeout)
            setLeaveTimeout(null)
        }
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        const timeout = setTimeout(() => {
            if (!isLocked) {
                setIsVisible(false)
            }
            setIsHovered(false)
        }, 1000)
        setLeaveTimeout(timeout)
    }

    return (
        <>
            <div
                className={clsx('hoverable-container group w-full')}
                onMouseEnter={handleMouseEnter}
            />
            <nav
                className={clsx(
                    'header w-full h-full flex justify-between items-center pr-2 md:px-4 shadow-sm',
                    {
                        'visible-header': isVisible || isLocked,
                        'invisible-header': !isVisible && !isLocked,
                    },
                )}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {children}
            </nav>
        </>
    )
}
