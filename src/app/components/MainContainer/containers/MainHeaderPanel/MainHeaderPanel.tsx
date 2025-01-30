'use client'

import { TabsList, PanelContent } from '../../components'
import { useHeaderStore } from '@/stores/header-store'
import { useTabStore } from '@/stores/tab-store'
import clsx from 'clsx'

export default function MainHeaderPanel() {
    const { isPanelVisible } = useTabStore()
    const { isVisible } = useHeaderStore()

    return (
        <div
            className={clsx('shadow-sm flex flex-col w-full', {
                'visible-panel h-full md:h-3/4 lg:h-1/2 mt-4': isPanelVisible,
                'hidden-panel': !isPanelVisible,
                'pointer-events-none': !isVisible,
            })}
        >
            <div className="flex-1 flex flex-col shadow-sm rounded dark:shadow-md h-full w-full border-2">
                <TabsList />
                <PanelContent />
            </div>
        </div>
    )
}
