'use client'

import { Button } from '@/components'
import { useHeaderStore } from '@/stores/header-store'
import { LockOpen, Lock } from 'lucide-react'

export default function LockButton() {
    const { isLocked, toggleLock } = useHeaderStore()

    return (
        <Button
            size="icon"
            variant={isLocked ? 'secondary' : 'ghost'}
            onClick={() => toggleLock()}
        >
            {isLocked ? <Lock /> : <LockOpen />}
        </Button>
    )
}
