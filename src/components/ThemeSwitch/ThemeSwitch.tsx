'use client'

import { useThemeStore } from '@/stores/theme-store'
import { Switch } from '../ui/switch'

export default function ThemeSwitch() {
    const { isDarkMode, toggleDarkMode } = useThemeStore()
    return <Switch checked={isDarkMode} onCheckedChange={toggleDarkMode} />
}
