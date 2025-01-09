'use client'

import { Cog } from 'lucide-react'
import { ClockDisplay } from '../../Displays/ClockDisplay'
import { useRef } from 'react'
import SlidingTabs from '../SlidingTabs/SlidingTabs'

const data = [
    {
        label: 'yesterday',
        children: 'Yesterday',
    },
    {
        label: 'today',
        children: 'Today',
    },
    {
        label: 'tomorrow',
        children: 'Tomorrow',
    },
    {
        label: 'settings',
        children: <Cog size={20} />,
        icon: true,
    },
]

export default function TabsList() {
    const tabsRef = useRef<HTMLDivElement>(null)
    return (
        <div className="relative flex items-center justify-between px-2 py-3 border hover:shadow-sm dark:border-none w-full">
            <ClockDisplay />
            <div className="relative flex gap-2" ref={tabsRef}>
                <SlidingTabs tabs={data} />
            </div>
        </div>
    )
}
