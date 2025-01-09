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
                className={clsx('hoverable-container h-full group', {
                    'w-full': isLocked,
                    'w-3/4': !isLocked,
                })}
                onMouseEnter={handleMouseEnter}
            />
            <div
                className={clsx('header', {
                    'visible-header transition-all duration-1000 delay-300 ease-linear':
                        isVisible || isLocked,
                    'invisible-header': !isVisible && !isLocked,
                })}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {children}
            </div>
        </>
    )
}
