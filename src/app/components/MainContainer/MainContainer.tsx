'use client'
import styles from './MainContainer.module.css'

import { MainHeader as Header } from '../MainHeader'
import clsx from 'clsx'
import { useContext } from 'react'
import { ThemeContext } from '@/contexts'

export default function MainContainer({
    children,
}: {
    children: React.ReactNode
}) {
    const context = useContext(ThemeContext)
    if (!context) return null

    const { theme } = context
    const isDarkMode = theme === 'dark'
    return (
        <div className="full-screen-container">
            <Header />
            <div
                className={clsx(styles.mainContainer, {
                    'bg-gray-950': isDarkMode,
                })}
            >
                <div
                    className={clsx(
                        styles.scrollYContainer,
                        {
                            'bg-gray-950': isDarkMode,
                        },
                        'pt-16 shadow-md hover:shadow-lg',
                    )}
                >
                    {children}
                    <div className="h-96 min-h-96" />
                    <div className="h-96 min-h-96" />
                    <div className="h-96 min-h-96" />
                    <div className="h-96 min-h-96" />
                    <div className="h-96 min-h-96" />
                    <div className="h-96 min-h-96" />
                    <div className="h-96 min-h-96" />
                    <div className="h-96 min-h-96" />
                    <div className="h-96 min-h-96" />
                    <div className="h-96 min-h-96" />
                </div>
            </div>
        </div>
    )
}
