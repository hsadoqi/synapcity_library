'use client'

import { Button } from '@/components'
import { useTabStore } from '@/stores/tab-store'

export default function TabItem({
    tab,
    icon = false,
    children,
}: {
    tab: string
    icon?: boolean
    children: React.ReactNode
}) {
    const { activeTab, isPanelVisible, setActiveTab } = useTabStore()
    const handleTabClick = (currentTab: string) => {
        const newTab = activeTab === currentTab ? null : currentTab
        setActiveTab(newTab)
    }

    return (
        <Button
            size={icon ? 'icon' : 'default'}
            variant={activeTab === tab && isPanelVisible ? 'default' : 'ghost'}
            onClick={() => handleTabClick(tab)}
        >
            {children}
        </Button>
    )
}
