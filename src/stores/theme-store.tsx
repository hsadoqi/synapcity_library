import { createStore, useStore } from 'zustand'

export type ThemeState = {
    isDarkMode: boolean
}

export type ThemeActions = {
    toggleDarkMode: (isDarkMode?: boolean) => void
}

export type ThemeStore = ThemeState & ThemeActions

export const initThemeStore = (): ThemeState => {
    return {
        isDarkMode: true,
    }
}

export const defaultInitState: ThemeState = {
    isDarkMode: true,
}

export const createThemeStore = (initState: ThemeState = defaultInitState) => {
    return createStore<ThemeStore>()((set) => ({
        ...initState,
        toggleDarkMode: (isDarkMode) =>
            set((state) => {
                const newDarkMode = isDarkMode ?? !state.isDarkMode
                localStorage.setItem('theme', newDarkMode ? 'dark' : 'light')
                return { isDarkMode: newDarkMode }
            }),
    }))
}

const themeStore = createThemeStore(initThemeStore())

export const useThemeStore = () => {
    return useStore(themeStore)
}
