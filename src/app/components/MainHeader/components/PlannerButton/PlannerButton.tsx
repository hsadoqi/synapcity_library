'use client'

import { Button } from '@/components'
import { useTabStore } from '@/stores/tab-store'
import { LucideCalendarClock as Clock } from 'lucide-react'

export default function PlannerButton() {
    const { isPanelVisible, openActiveTab, togglePanel, setActiveTab } =
        useTabStore()

    const handlePanelVisibility = () => {
        togglePanel()
        if (!isPanelVisible) {
            openActiveTab('today')
        } else {
            setActiveTab(null)
        }
    }
    return (
        <Button
            size="icon"
            variant={isPanelVisible ? 'inner' : 'ghost'}
            onClick={() => handlePanelVisibility()}
            className={
                isPanelVisible
                    ? 'bg-gray-950 text-white dark:bg-white dark:text-gray-950'
                    : 'bg-transparent'
            }
        >
            <Clock />
        </Button>
    )
}
