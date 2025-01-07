'use client'

import { Button } from '@/components'
import { useUIStore } from '@/stores/ui-store'
import { getGreeting } from '@/utils/dateUtils'
import { Clock2 } from 'lucide-react'

export default function PanelHeader({ name }: { name: string }) {
    const { isClockVisible, toggleClock } = useUIStore()
    return (
        <div className="flex justify-center items-center gap-4 py-2 md:py-4 relative">
            <div className="flex justify-center items-center gap-4">
                <h3 className="text-xl md:text-2xl font-bold">
                    {getGreeting(name)}
                </h3>
                <Button
                    variant={isClockVisible ? 'inner' : 'ghost'}
                    size="icon"
                    onClick={() => toggleClock()}
                >
                    <Clock2 />
                </Button>
            </div>
        </div>
    )
}
