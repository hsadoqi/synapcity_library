'use client'

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
                    [styles.visible]: isVisible,
                    [styles.hidden]: !isVisible,
                })}
            >
                {children}
            </div>
        </div>
    )
}
