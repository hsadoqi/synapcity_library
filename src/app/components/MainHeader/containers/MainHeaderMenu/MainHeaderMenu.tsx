'use client'

import { Button } from '@/components'
import { ThemeWrapper } from '@/components/theming/ThemeWrapper'
import { useUIStore } from '@/providers/ui-store-provider'
import { LockOpen, Lock } from 'lucide-react'

export default function MainHeaderMenu() {
    const { isHeaderLocked, toggleHeaderLock } = useUIStore((state) => state)

    return (
        <div className="flex justify-center items-center gap-2">
            <ThemeWrapper />
            <Button
                size="icon"
                variant={isHeaderLocked ? 'secondary' : 'ghost'}
                onClick={() => toggleHeaderLock()}
            >
                {isHeaderLocked ? <Lock /> : <LockOpen />}
            </Button>
        </div>
    )
}
