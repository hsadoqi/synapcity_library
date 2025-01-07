'use client'

import { PanelHeader, TabsList, TabContent } from '../../components'
import { TabContainer } from '../TabContainer'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useTabStore } from '@/stores/tab-store'
import clsx from 'clsx'

export default function MainHeaderPanel() {
    const { isPanelVisible } = useTabStore()

    return (
        isPanelVisible && (
            <div className={clsx('panel visible-panel p-4 shadow-sm')}>
                <div className="overflow-hidden h-full md:h-1/2 w-full rounded">
                    <PanelHeader name="Bob" />
                    <TabContainer>
                        <TabsList />
                        <ScrollArea className="h-[calc(80vh)] max-h-[calc(90vh)] md:h-[calc(100vh-50vh)] md:max-h-[calc(38vh)]">
                            <TabContent />
                        </ScrollArea>
                    </TabContainer>
                </div>
            </div>
        )
    )
}
