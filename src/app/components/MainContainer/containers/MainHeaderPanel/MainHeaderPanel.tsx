'use client'

import { PanelHeader, TabsList, TabContent } from '../../components'
import { TabContainer } from '../TabContainer'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { useTabStore } from '@/stores/tab-store'
import clsx from 'clsx'

export default function MainHeaderPanel() {
    const { isPanelVisible } = useTabStore()

    return (
        <div
            className={clsx('shadow-sm', {
                'visible-panel h-full md:h-1/2 transition-all duration-1000 delay-300':
                    isPanelVisible,
                'hidden-panel transition-all duration-1000 delay-300':
                    !isPanelVisible,
            })}
        >
            <div
                className={clsx({
                    'visible-panel transition-all duration-1000 delay-300':
                        isPanelVisible,
                    'hidden-panel transition-all duration-1000 delay-300':
                        !isPanelVisible,
                })}
            >
                <div className="overflow-hidden w-[calc(100vw)] rounded px-8 py-2">
                    <PanelHeader name="Bob" />
                    <TabContainer>
                        <TabsList />
                        <ScrollArea className="w-[calc(100vw)] max-w-full overscroll-contain">
                            <TabContent />
                            <ScrollBar
                                orientation="horizontal"
                                style={{ height: '2px' }}
                            />
                        </ScrollArea>
                    </TabContainer>
                </div>
            </div>
        </div>
    )
}
