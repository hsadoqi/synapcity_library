'use client'

import { Button } from '@/components'
import { useTabStore } from '@/stores/tab-store'
import { PanelBottomOpen, PanelBottomClose } from 'lucide-react'

export default function PanelButton() {
    const { isPanelVisible, openActiveTab, togglePanel, setActiveTab } =
        useTabStore()

    const handlePanelVisibility = () => {
        togglePanel()
        if (!isPanelVisible) {
            openActiveTab('date')
        } else {
            setActiveTab(null)
        }
    }
    return (
        <Button
            size="icon"
            variant={isPanelVisible ? 'inner' : 'ghost'}
            onClick={() => handlePanelVisibility()}
        >
            {isPanelVisible ? <PanelBottomOpen /> : <PanelBottomClose />}
        </Button>
    )
}
