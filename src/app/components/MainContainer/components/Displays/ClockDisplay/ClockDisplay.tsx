'use client'

import { useUIStore } from '@/stores/ui-store'
import clsx from 'clsx'
import { Clock } from '@/components'
import { useState, useEffect } from 'react'

export default function ClockDisplay() {
    const { isClockVisible } = useUIStore()
    const [showDate, setShowDate] = useState(false)
    const activeDate = new Date().toDateString()

    useEffect(() => {
        let timeout: NodeJS.Timeout | undefined

        if (showDate) {
            timeout = setTimeout(() => {
                setShowDate(false)
            }, 2000)
        }

        return () => {
            if (timeout) {
                clearTimeout(timeout)
            }
        }
    }, [showDate])

    const toggleDate = () => {
        if (isClockVisible) {
            if (!showDate) {
                setShowDate(true)
            } else {
                setShowDate(false)
            }
        }
    }

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
            {showDate && (
                <h4
                    className={clsx(
                        'text-sm sm:text-base md:text-lg font-bold',
                        {
                            visible: showDate,
                            'invisible md:visible': !showDate,
                        },
                    )}
                >
                    {activeDate}
                </h4>
            )}
            <Clock onClick={toggleDate} />
        </div>
    )
}
