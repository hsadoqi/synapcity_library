import { create, useStore } from 'zustand'

export type HeaderState = {
    isVisible: boolean
    isLocked: boolean
    isHovered: boolean
    isAreasVisible: boolean
    isAppLocked: boolean
}

export type HeaderActions = {
    setIsVisible: (open?: boolean) => void
    setIsHovered: (open?: boolean) => void
    toggleLock: (open?: boolean) => void
    toggleAreas: (show?: boolean) => void
}

export type HeaderStore = HeaderState & HeaderActions

export const initHeaderStore = (): HeaderState => ({
    isVisible: true,
    isLocked: true,
    isHovered: false,
    isAreasVisible: false,
    isAppLocked: false,
})

export const defaultInitState: HeaderState = {
    isVisible: true,
    isLocked: true,
    isHovered: false,
    isAreasVisible: true,
    isAppLocked: false,
}

export const createHeaderStore = (initState: HeaderState = defaultInitState) =>
    create<HeaderStore>((set) => ({
        ...initState,
        setIsVisible: (open) =>
            set((state) => {
                const isOpen = state.isAppLocked
                    ? false
                    : state.isLocked
                      ? true
                      : open
                return {
                    isVisible: isOpen !== undefined ? isOpen : !state.isVisible,
                }
            }),
        toggleLock: (open) =>
            set((state) => ({
                isLocked: open !== undefined ? open : !state.isLocked,
                isVisible: true,
            })),
        setIsHovered: (open = true) =>
            set((state) => {
                const isOpen = state.isLocked ? true : open

                return {
                    isHovered: open !== undefined ? open : !state.isHovered,
                    isVisible: isOpen,
                }
            }),
        toggleAreas: (show) =>
            set((state) => ({
                isAreasVisible:
                    show !== undefined ? show : !state.isAreasVisible,
            })),
    }))

const headerStore = createHeaderStore(initHeaderStore())

export const useHeaderStore = () => useStore(headerStore)
