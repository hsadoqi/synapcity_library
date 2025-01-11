'use client'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu'
// import { ClockDisplay } from '../../Displays/ClockDisplay'
import { Button, LinkButton } from '@/components'
import { Cog } from 'lucide-react'
import { useTabStore } from '@/stores/tab-store'
import { useRef } from 'react'
import dynamic from 'next/dynamic'
import clsx from 'clsx'
import { PanelHeader } from '../../PanelHeader'
import { useAreasStore } from '@/stores/areas-store'

const SlidingTabs = dynamic(
    () => import('../SlidingTabs').then((mod) => mod.SlidingTabs),
    { ssr: false },
)

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
    const { activeTab, setActiveTab } = useTabStore()
    const { activeArea } = useAreasStore()
    return (
        <div className="relative flex items-center justify-between px-2 py-3 border hover:shadow-sm dark:border-none w-full">
            <PanelHeader name="Bob" />
            {/* <ClockDisplay /> */}
            <div className="relative hidden md:flex gap-2" ref={tabsRef}>
                {activeArea && (
                    <LinkButton
                        href={activeArea.slug as string}
                        variant="inner"
                        label={activeArea.label}
                    />
                )}
                <SlidingTabs tabs={data} />
            </div>
            <div className="relative flex gap-3 md:hidden bg-white dark:bg-gray-950 text-neutral-950 dark:text-white rounded-b-full">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="default"
                            className="w-20 rounded-b-none"
                        >
                            {activeTab
                                ? activeTab[0].toUpperCase() +
                                  activeTab?.slice(1).toLowerCase()
                                : 'Today'}
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-20 rounded-b-full">
                        <DropdownMenuSeparator />
                        {data.map(
                            (item, index) =>
                                item.label !== activeTab &&
                                !item.icon && (
                                    <DropdownMenuItem key={`item-${index}`}>
                                        <Button
                                            onClick={() =>
                                                setActiveTab(item.label)
                                            }
                                            variant={
                                                item.label === activeTab
                                                    ? 'secondary'
                                                    : 'default'
                                            }
                                            className={clsx(
                                                'w-full rounded-none',
                                                {
                                                    'rounded-b-full':
                                                        index ===
                                                        data.length - 1,
                                                },
                                            )}
                                        >
                                            {item.label[0].toUpperCase() +
                                                item.label
                                                    .slice(1)
                                                    .toLowerCase()}
                                        </Button>
                                    </DropdownMenuItem>
                                ),
                        )}
                    </DropdownMenuContent>
                </DropdownMenu>
                <Button size="icon" onClick={() => setActiveTab('settings')}>
                    <Cog size={16} />
                </Button>
            </div>
        </div>
    )
}
