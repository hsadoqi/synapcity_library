'use client'

import { useUIStore } from '@/stores/ui-store'
import clsx from 'clsx'
import { Clock } from '@/components'

export default function ClockDisplay() {
    const { isClockVisible } = useUIStore()
    const activeDate = new Date().toDateString()
    return (
        <div
            className={clsx(
                'flex flex-col md:flex-row justify-center items-center gap-1 sm:gap-3 pr-2 transition-all duration-300 ease-in-outrounded shadow-gray-200 dark:shadow-gray-700 bg-white dark:bg-gray-950',
                {
                    'invisible lg:visible': !isClockVisible,
                    visible: isClockVisible,
                },
            )}
        >
            <h4 className="text-sm sm:text-base md:text-lg font-bold">
                {activeDate}
            </h4>
            <Clock />
        </div>
    )
}
