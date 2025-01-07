'use client'

import {
    createContext,
    useContext,
    ReactNode,
    useEffect,
    useState,
} from 'react'
import { useThemeStore } from '@/stores/theme-store'
import { LoadingSpinner } from '@/components'

export interface ThemeProps {
    isDarkMode: boolean
    toggleDarkMode: (isDarkMode?: boolean) => void
}

const ThemeContext = createContext<ThemeProps | null>(null)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const { isDarkMode, toggleDarkMode } = useThemeStore()
    const [isThemeLoaded, setIsThemeLoaded] = useState(false)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme')
            if (savedTheme) {
                toggleDarkMode(savedTheme === 'dark')
            } else {
                const systemTheme = window.matchMedia(
                    '(prefers-color-scheme: dark)',
                ).matches
                toggleDarkMode(systemTheme)
            }
            setIsThemeLoaded(true)
        }
    }, [toggleDarkMode])

    useEffect(() => {
        if (isThemeLoaded) {
            document.documentElement.classList.toggle('dark', isDarkMode)
        }
    }, [isDarkMode, isThemeLoaded])

    if (!isThemeLoaded) {
        return <LoadingSpinner size="xl" />
    }

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => useContext(ThemeContext)
