'use client'

import { ThemeContext } from '@/contexts'
import { ThemeToggle } from '../ThemeToggle'
import { useContext } from 'react'

export default function ThemeWrapper() {
    const context = useContext(ThemeContext)

    if (!context) {
        return null
    }

    const { theme, setTheme } = context
    const isDarkMode = theme === 'dark'

    return (
        <ThemeToggle
            isDarkMode={isDarkMode}
            toggleDarkMode={() =>
                isDarkMode ? setTheme('light') : setTheme('dark')
            }
            className="justify-end"
        />
    )
}
