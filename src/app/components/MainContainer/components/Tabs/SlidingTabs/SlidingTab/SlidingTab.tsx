'use client'

import { useTabStore } from '@/stores/tab-store'
import { Tab } from '../SlidingTabs'
import styles from '../SlidingTab.module.css'

import clsx from 'clsx'

export interface SlidingTabProps {
    tab: Tab
    tag: string
    children?: React.ReactNode
    className?: string
    firstChild?: boolean
    lastChild?: boolean
}

export default function SlidingTab({
    tab,
    tag,
    children,
    firstChild = false,
    lastChild = false,
}: SlidingTabProps) {
    const { activeTab, setActiveTab } = useTabStore()
    const isActive = activeTab === tab.label

    console.log(tab, tag, children, firstChild, lastChild)

    return (
        <div
            className={clsx('shadow-inner hover:shadow-sm', {
                'rounded-l': firstChild,
                'rounded-r': lastChild,
                active: isActive,
            })}
            data-tab={tag}
        >
            <input
                type="radio"
                id={tag}
                name="tabs"
                onChange={() => setActiveTab(tab.label)}
                checked={isActive}
                className="hidden"
            />
            <label className={clsx(styles.tab, 'tab text-sm')} htmlFor={tag}>
                {tab.children ||
                    tab.label[0].toUpperCase() + tab.label.slice(1)}
            </label>
        </div>
    )
}
