'use client'

import { useTabStore } from '@/stores/tab-store'

export default function TabContent() {
    const { activeTab } = useTabStore()
    const activeDate = new Date().toDateString()

    return (
        <div className="mx-auto p-4">
            <div className="w-full h-full">
                {activeTab === 'settings' ? 'Settings' : activeDate}
                <div className="h-96 min-h-96">1</div>
                <div className="h-96 min-h-96">2</div>
                <div className="h-96 min-h-96">3</div>
            </div>
        </div>
    )
}
