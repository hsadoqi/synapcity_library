'use client'

import { clsx } from 'clsx'
import { TabItem } from '../TabItem'
import { Cog } from 'lucide-react'
import { Clock } from '@/components'
import { useUIStore } from '@/stores/ui-store'

const data = [
    {
        tab: 'date',
        children: 'Today',
    },
    {
        tab: 'settings',
        children: <Cog size={20} />,
        icon: true,
    },
]

export default function TabsList() {
    const { isClockVisible } = useUIStore()
    const activeDate = new Date().toDateString()
    return (
        <div className="flex items-center justify-between px-2 py-3 border hover:shadow-sm dark:border-none">
            <div className="flex items-center justify-center gap-1">
                {data.map((item, index) => (
                    <TabItem
                        key={`tab-${index}`}
                        tab={item.tab}
                        icon={item.icon}
                    >
                        {item.children}
                    </TabItem>
                ))}
            </div>
            <div
                className={clsx(
                    'transition-all duration-300 ease-in-out flex flex-col md:flex-row justify-center items-center gap-1 sm:gap-3 p-2 rounded shadow-gray-200 dark:shadow-gray-700 bg-white dark:bg-gray-950',
                    {
                        invisible: !isClockVisible,
                        visible: isClockVisible,
                    },
                )}
            >
                <h4 className="text-sm sm:text-base md:text-lg font-bold">
                    {activeDate}
                </h4>
                <Clock />
            </div>
        </div>
    )
}
