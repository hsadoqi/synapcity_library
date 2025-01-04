'use client'

import { Loader } from 'lucide-react'
import { createContext, useEffect, useState } from 'react'

interface ThemeProps {
    theme?: string
    setTheme: (value: string) => void
}

const ThemeContext = createContext<ThemeProps | undefined>(undefined)

function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<string | undefined>(undefined)
    const [isThemeLoaded, setIsThemeLoaded] = useState(false)

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')
        if (savedTheme) {
            setTheme(savedTheme)
        } else {
            const systemTheme = window.matchMedia(
                '(prefers-color-scheme: dark)',
            ).matches
            setTheme(systemTheme ? 'dark' : 'light')
        }
        setIsThemeLoaded(true)
    }, [])

    useEffect(() => {
        if (!theme || !isThemeLoaded) return
        const htmlClassList = document.documentElement.classList
        if (theme === 'dark') {
            htmlClassList.add('dark')
        } else {
            htmlClassList.remove('dark')
        }
        localStorage.setItem('theme', theme)
    }, [theme, isThemeLoaded])

    if (!isThemeLoaded) {
        return <Loader className="animate-spin" />
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider }
