'use client'

import { useEffect, useState } from 'react'
import { useUIStore } from '@/providers/ui-store-provider'
import { useTabStore } from '@/providers/tab-store-provider'
import { ThemeWrapper } from '@/components/theming/ThemeWrapper'
import HoverWrapper from './HoverWrapper'
import { Button } from '@/components'
import { LockOpen, PencilLineIcon, Lock, PanelBottomOpen } from 'lucide-react'
import styles from './MainHeader.module.css'
import clsx from 'clsx'

export default function MainHeader() {
    const [isLocked, setIsLocked] = useState(true)
    const { isHeaderLocked, toggleHeaderLock } = useUIStore((state) => state)

    const { isPanelVisible, openActiveTab, togglePanel, setActiveTab } =
        useTabStore((state) => state)

    useEffect(() => {
        if (isHeaderLocked !== null) {
            setIsLocked(isHeaderLocked)
        }
    }, [isHeaderLocked])

    const handlePanelVisibility = () => {
        togglePanel()
        if (!isPanelVisible) {
            openActiveTab('open')
        } else {
            setActiveTab(null)
        }
    }

    return (
        <header className={clsx(styles.headerContainer)}>
            <HoverWrapper>
                <nav className="w-full h-full flex justify-between items-center px-4 shadow-sm hover:shadow-md shadow-gray-200 dark:shadow-gray-800">
                    <div className="flex items-center justify-between p-2">
                        <div className="flex items-center justify-evenly gap-2 p-2 rounded-md border shadow-sm hover:shadow-inner">
                            <PencilLineIcon />
                            <h1>SynapCity</h1>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <Button
                            size="icon"
                            variant={isPanelVisible ? 'outline' : 'ghost'}
                            onClick={() => handlePanelVisibility()}
                        >
                            <PanelBottomOpen />
                        </Button>
                        <Button
                            size="icon"
                            variant={isLocked ? 'secondary' : 'ghost'}
                            onClick={() => toggleHeaderLock()}
                        >
                            {isLocked ? <Lock /> : <LockOpen />}
                        </Button>
                        <ThemeWrapper />
                    </div>
                </nav>
            </HoverWrapper>
        </header>
    )
}
