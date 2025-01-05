import { Button } from '@/components/ui/button'
import { clsx } from 'clsx'
import { SunIcon, MoonIcon } from 'lucide-react'

export function ThemeToggle({
    isDarkMode,
    toggleDarkMode,
}: {
    isDarkMode?: boolean
    toggleDarkMode?: () => void
}) {
    return (
        <Button
            variant="outline"
            onClick={toggleDarkMode}
            data-testid="theme-toggle"
            className={clsx({
                'bg-gray-950 text-white': !isDarkMode,
                'bg-white text-gray-950': isDarkMode,
            })}
        >
            {isDarkMode ? (
                <SunIcon data-testid="sun-icon" />
            ) : (
                <MoonIcon data-testid="moon-icon" />
            )}
        </Button>
    )
}
