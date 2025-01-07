'use client'

import { Button } from '@/components/ui'
import { useThemeStore } from '@/stores/theme-store'
import { SunIcon, MoonIcon } from 'lucide-react'

export function ThemeToggle() {
    const { toggleDarkMode } = useThemeStore()
    return (
        <Button
            variant="ghost"
            onClick={() => toggleDarkMode()}
            className="h-8 w-8 px-0"
        >
            <MoonIcon
                aria-label="Toggle dark"
                className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            />
            <SunIcon
                aria-label="Toggle light"
                className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
