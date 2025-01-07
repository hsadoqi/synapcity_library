'use client'

import { useTabStore } from '@/stores/tab-store'
import { PanelHeader, PanelTabsContainer, PanelContent } from './containers'
import clsx from 'clsx'

export default function MainHeaderPanel() {
    const { isPanelVisible } = useTabStore()

    return (
        isPanelVisible && (
            <div className={clsx('panel visible-panel')}>
                <div className="overflow-hidden h-full md:h-1/2 w-full border-2 rounded p-4">
                    <PanelHeader name="Bob" />
                    <PanelTabsContainer />
                    <PanelContent />
                </div>
            </div>
        )
    )
}
