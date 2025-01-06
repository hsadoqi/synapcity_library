'use client'

import { useContext } from 'react'
import { ThemeContext } from '@/contexts'
import { useUIStore } from '@/providers/ui-store-provider'
import { useState } from 'react'
import styles from './MainHeader.module.css'
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
    const { isHeaderVisible: isMainHeaderVisible } = useUIStore(
        (state) => state,
    )
    const context = useContext(ThemeContext)

    if (!context) {
        return null
    }

    const { theme } = context

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
            className={clsx(styles.hoverableContainer, 'group')}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className={clsx(styles.header, {
                    'bg-gray-950': theme === 'dark',
                    [styles.visible]: isMainHeaderVisible || isVisible,
                    [styles.hidden]: !isVisible && !isMainHeaderVisible,
                })}
            >
                {children}
            </div>
        </div>
    )
}
