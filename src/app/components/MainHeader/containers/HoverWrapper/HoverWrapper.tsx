'use client'

import { useUIStore } from '@/providers/ui-store-provider'
import { useState } from 'react'
import clsx from 'clsx'

export default function HoverWrapper({
    children,
}: {
    children: React.ReactNode
}) {
    const [isVisible, setIsVisible] = useState(false)
    const [leaveTimeout, setLeaveTimeout] = useState<NodeJS.Timeout | null>(
        null,
    )
    const { isHeaderLocked } = useUIStore((state) => state)

    const handleMouseEnter = () => {
        if (leaveTimeout) {
            clearTimeout(leaveTimeout)
            setLeaveTimeout(null)
        }
        setIsVisible(true)
    }

    const handleMouseLeave = () => {
        const timeout = setTimeout(() => {
            setIsVisible(false)
        }, 500)
        setLeaveTimeout(timeout)
    }

    return (
        <div
            className={clsx('hoverable-container h-full group')}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className={clsx('header', {
                    visible: isHeaderLocked || isVisible,
                })}
            >
                {children}
            </div>
        </div>
    )
}
