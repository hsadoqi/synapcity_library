'use client'

import clsx from 'clsx'
import SlidingTab from './SlidingTab/SlidingTab'
import styles from './SlidingTab.module.css'
import { useTabStore } from '@/stores/tab-store'
import { useEffect, useRef } from 'react'

export type Tab = {
    label: string
    children?: React.ReactNode
    icon?: boolean
}
export default function SlidingTabs({ tabs }: { tabs: Tab[] }) {
    const { activeTab } = useTabStore()
    const gliderRef = useRef<HTMLSpanElement | null>(null)
    const tabContainerRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (tabContainerRef.current && gliderRef.current) {
            const foundTab = tabs.findIndex((tab) => tab.label === activeTab)
            const activeTabElement = tabContainerRef.current.children[
                foundTab
            ] as HTMLElement
            console.log('active element', activeTabElement)

            if (activeTabElement) {
                const { left, width } = activeTabElement.getBoundingClientRect()
                const containerLeft =
                    tabContainerRef.current.getBoundingClientRect().left

                gliderRef.current.style.left = `${left - containerLeft}px`
                gliderRef.current.style.width = `${width}px`
            }
        }
    }, [activeTab, tabs])

    return (
        <div
            ref={tabContainerRef}
            className={clsx(
                styles.container,
                'bg-neutral-200 dark:bg-neutral-900 rounded',
            )}
        >
            {tabs.map((tab, index) => {
                const id = `tab-${index}`
                return <SlidingTab key={id} tab={tab} tag={id} />
            })}
            <span
                ref={gliderRef}
                className={clsx(
                    styles.glider,
                    'glider bg-slate-300 dark:bg-neutral-800',
                )}
            ></span>
        </div>
    )
}
