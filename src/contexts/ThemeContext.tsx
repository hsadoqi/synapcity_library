'use client'

import { ThemeType } from '@/components/theming/ThemeToggle/__tests__/utils/renderWithThemeContext'
import { Loader } from 'lucide-react'
import { createContext, useEffect, useState } from 'react'

export interface ThemeProps {
    theme?: ThemeType | string
    setTheme: (value: ThemeType | string) => void
}

const ThemeContext = createContext<ThemeProps | undefined>(undefined)
function ThemeProvider({
    initialTheme,
    children,
}: {
    initialTheme?: ThemeType | string | undefined
    children: React.ReactNode
}) {
    const [theme, setTheme] = useState<ThemeType | string | undefined>(
        initialTheme || 'light',
    )
    const [isThemeLoaded, setIsThemeLoaded] = useState(false)

    useEffect(() => {
        const savedTheme =
            initialTheme ||
            (localStorage.getItem('theme') as unknown as ThemeType)
        if (savedTheme) {
            setTheme(savedTheme)
        } else {
            const systemTheme = window.matchMedia(
                '(prefers-color-scheme: dark)',
            ).matches
            setTheme(systemTheme ? 'dark' : 'light')
        }
        setIsThemeLoaded(true)
    }, [initialTheme])

    useEffect(() => {
        if (!theme || !isThemeLoaded) return
        const htmlClassList = document.documentElement.classList
        if (theme === 'dark') {
            htmlClassList.add('dark')
        } else {
            htmlClassList.remove('dark')
        }
        if (typeof window !== 'undefined' && window.localStorage) {
            localStorage.setItem('theme', theme as string)
        }
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
