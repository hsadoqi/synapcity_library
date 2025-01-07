'use client'

import { Button } from '@/components'
import { useTabStore } from '@/stores/tab-store'
import { Cog } from 'lucide-react'

export default function PanelTabsContainer() {
    const { activeTab, isPanelVisible, setActiveTab } = useTabStore()
    const handleTabClick = (currentTab: string) => {
        const newTab = activeTab === currentTab ? null : currentTab
        setActiveTab(newTab)
    }
    return (
        <div className="flex items-center justify-start gap-1 px-2 py-1 border shadow-sm hover:shadow-md">
            <Button
                size="default"
                variant={
                    activeTab === 'date' && isPanelVisible ? 'default' : 'ghost'
                }
                onClick={() => handleTabClick('date')}
            >
                Today
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
    )
}
