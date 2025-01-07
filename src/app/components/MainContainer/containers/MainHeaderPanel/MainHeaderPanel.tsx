'use client'

import { PanelHeader, TabsList, TabContent } from '../../components'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useTabStore } from '@/stores/tab-store'
import clsx from 'clsx'

export default function MainHeaderPanel() {
    const { isPanelVisible } = useTabStore()

    return (
        isPanelVisible && (
            <div className={clsx('panel visible-panel')}>
                <div className="overflow-hidden h-full md:h-1/2 w-full border-2 rounded p-4">
                    <PanelHeader name="Bob" />
                    <TabsList />
                    <ScrollArea className="h-[calc(80vh)] max-h-[calc(90vh)] md:h-[calc(100vh-50vh)] md:max-h-[calc(38vh)] border-2">
                        <TabContent />
                    </ScrollArea>
                </div>
            </div>
        )
    )
}
