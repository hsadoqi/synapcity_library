'use client'

import { Button } from '@/components/ui/button'
import { ThemeContext } from '@/contexts'
import { SunIcon, MoonIcon } from 'lucide-react'
import { useContext } from 'react'

export function ThemeToggle() {
    const context = useContext(ThemeContext)

    if (!context) {
        return null
    }

    const { theme, setTheme } = context

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <Button variant="outline" onClick={toggleTheme}>
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </Button>
    )
}
