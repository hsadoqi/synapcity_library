'use client'

import { ThemeContext } from '@/contexts'
import { render } from '@testing-library/react'
import { ThemeToggle } from '../../ThemeToggle'
import { useEffect } from 'react'

export type ThemeType = { theme: 'light' | 'dark' }

const ThemeProviderWrapper = ({
    setTheme,
    isDarkMode,
    children,
}: {
    setTheme: (theme?: ThemeType | string) => void
    isDarkMode?: boolean
    children: React.ReactNode
}) => {
    useEffect(() => {
        if (isDarkMode) {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }, [isDarkMode, setTheme])

    return (
        <ThemeContext.Provider
            value={{ theme: isDarkMode ? 'dark' : 'light', setTheme }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export const renderWithThemeContext = (
    setTheme: (theme?: ThemeType | string) => void,
    isDarkMode?: boolean,
) => {
    const toggleTheme = () => {
        setTheme(isDarkMode ? 'light' : 'dark')
    }

    return render(
        <ThemeProviderWrapper setTheme={setTheme} isDarkMode={isDarkMode}>
            <ThemeToggle toggleDarkMode={toggleTheme} isDarkMode={isDarkMode} />
        </ThemeProviderWrapper>,
    )
}
export const renderWithoutThemeContext = (
    setTheme?: (theme?: ThemeType | string) => void,
    isDarkMode?: boolean,
) => {
    if (!setTheme || !isDarkMode) {
        return null
    }

    const toggleTheme = () => {
        setTheme(isDarkMode ? 'light' : 'dark')
    }

    return render(
        <ThemeToggle toggleDarkMode={toggleTheme} isDarkMode={isDarkMode} />,
    )
}
