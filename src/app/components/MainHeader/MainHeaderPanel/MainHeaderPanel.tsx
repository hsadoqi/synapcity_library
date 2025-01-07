'use client'

import styles from './MainHeaderPanel.module.css'
import { useTabStore } from '@/providers/tab-store-provider'
import clsx from 'clsx'
import { Button } from '@/components'
import { Cog } from 'lucide-react'
import { useState } from 'react'
export default function MainHeaderPanel() {
    const { activeTab, isPanelVisible, setActiveTab } = useTabStore(
        (state) => state,
    )
    const [todaysDate] = useState(new Date().toDateString())

    const handleTabClick = (currentTab = 'date') => {
        const newTab = activeTab === currentTab ? null : currentTab
        setActiveTab(newTab)
    }

    return (
        isPanelVisible && (
            <div className={clsx(styles.panel, 'visible')}>
                <div className="overflow-hidden h-1/2 w-full border-2 rounded p-4">
                    <h3 className="text-xl md:text-2xl font-bold p-2 mb-4">
                        Main Header Panel: {activeTab}
                    </h3>
                    <div className="hidden md:flex items-center justify-start gap-1 px-2 py-1 border shadow-sm hover:shadow-md">
                        <Button
                            size="sm"
                            variant={
                                activeTab === 'date' && isPanelVisible
                                    ? 'default'
                                    : 'ghost'
                            }
                            onClick={() => handleTabClick('date')}
                        >
                            {todaysDate}
                        </Button>
                        <Button
                            size="icon"
                            variant={
                                activeTab === 'settings' && isPanelVisible
                                    ? 'default'
                                    : 'ghost'
                            }
                            onClick={() => handleTabClick('settings')}
                        >
                            <Cog size={20} />
                        </Button>
                    </div>
                    <div
                        className={
                            'h-[calc(100vh-50vh)] max-h-[calc(38vh)] border-2 scroll-y-container'
                        }
                    >
                        <div className="h-96 min-h-96">1</div>
                        <div className="h-96 min-h-96">2</div>
                        <div className="h-96 min-h-96">3</div>
                    </div>
                </div>
            </div>
        )
    )
}
