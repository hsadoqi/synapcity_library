'use client'

import { useUIStore } from '@/providers/ui-store-provider'
import { useState } from 'react'
import styles from './MainHeader.module.css'
import clsx from 'clsx'
import { useThemeStore } from '@/stores/theme-store'

export default function HoverWrapper({
    children,
}: {
    children: React.ReactNode
}) {
    const { isDarkMode } = useThemeStore()
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
            className={clsx(styles.hoverableContainer, 'h-full group')}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className={clsx(styles.header, {
                    'bg-gray-950': isDarkMode,
                    [styles.visible]: isHeaderLocked || isVisible,
                    [styles.hidden]: !isHeaderLocked && !isVisible,
                })}
            >
                {children}
            </div>
        </div>
    )
}
