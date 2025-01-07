'use client'

import { MainHeaderPanel } from '../MainHeader/MainHeaderPanel'
import { MainHeader as Header } from '../MainHeader'
import styles from './MainContainer.module.css'
import '@/styles/globals.css'
import clsx from 'clsx'
import { useThemeStore } from '@/stores/theme-store'

export default function MainContainer({
    children,
}: {
    children: React.ReactNode
}) {
    const { isDarkMode } = useThemeStore()
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
                        styles.mainContainer,
                        {
                            'bg-gray-950': isDarkMode,
                        },
                        'p-0 shadow-md hover:shadow-lg h-[calc(80vh',
                    )}
                >
                    <MainHeaderPanel />
                    <div
                        className={clsx(
                            {
                                'bg-gray-950': isDarkMode,
                            },
                            'shadow-md hover:shadow-lg border-2 scroll-y-container',
                        )}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
