'use client'

import { Button, Clock } from '@/components'
import { getGreeting } from '@/utils/dateUtils'
import clsx from 'clsx'
import { Clock2 } from 'lucide-react'
import { useState } from 'react'

export default function PanelHeader({ name }: { name: string }) {
    const [showDate, setShowDate] = useState(false)
    const activeDate = new Date().toDateString()

    const toggleDate = () => {
        setShowDate((prev) => !prev)
    }

    return (
        <div className="flex justify-start md:justify-center items-center gap-4 py-4 relative">
            <div className="flex justify-center items-center gap-4">
                <h3 className="text-xl md:text-2xl font-bold">
                    {getGreeting(name)}
                </h3>
                <Button
                    size="icon"
                    onClick={toggleDate}
                    className="inline-flex md:hidden"
                >
                    <Clock2 />
                </Button>
            </div>

            <div
                className={clsx(
                    'absolute top-0 right-0 flex flex-col justify-center items-center gap-2 p-2 shadow-md rounded shadow-gray-200 dark:shadow-gray-700 bg-white dark:bg-gray-950',
                    {
                        'flex absolute': showDate,
                        hidden: !showDate,
                    },
                )}
            >
                <h4 className="text-lg md:text-xl font-bold">{activeDate}</h4>
                <Clock />
            </div>
        </div>
    )
}
