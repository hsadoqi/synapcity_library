'use client'

import { useTabStore } from '@/stores/tab-store'
export default function DateDisplay({ day }: { day: string }) {
    const { activeTab } = useTabStore()

    const today = new Date()
    const activeDate = today.toDateString()

    const yesterday = new Date(today)
    yesterday.setDate(today.getDate() - 1)

    const tomorrow = new Date(today)
    tomorrow.setDate(today.getDate() + 1)

    const currentDate = () => {
        switch (activeTab) {
            case 'tomorrow':
                return tomorrow.toDateString()
            case 'yesterday':
                return yesterday.toDateString()
            default:
                return activeDate
        }
    }

    return (
        <div className="w-max inline-flex items-center justify-center">
            <p className="whitespace-nowrap">
                {day}: {currentDate()}
            </p>
        </div>
    )
}
