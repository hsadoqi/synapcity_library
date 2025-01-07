import { createStore, useStore } from 'zustand'

export type UIState = {
    isHeaderVisible: boolean
    isHeaderLocked: boolean
    isClockVisible: boolean
}

export type UIActions = {
    setIsHeaderVisible: (open?: boolean) => void
    toggleHeaderLock: (open?: boolean) => void
    toggleClock: (show?: boolean) => void
}

export type UIStore = UIState & UIActions

export const initUIStore = (): UIState => {
    return {
        isHeaderVisible: true,
        isHeaderLocked: true,
        isClockVisible: true,
    }
}

export const defaultInitState: UIState = {
    isHeaderVisible: true,
    isHeaderLocked: true,
    isClockVisible: true,
}

export const createUIStore = (initState: UIState = defaultInitState) => {
    return createStore<UIStore>()((set) => ({
        ...initState,
        setIsHeaderVisible: (open) =>
            set((state) => ({
                isHeaderVisible: open || !state.isHeaderVisible,
            })),
        toggleHeaderLock: (open) =>
            set((state) => ({
                isHeaderLocked: open || !state.isHeaderLocked,
            })),
        toggleClock: (show) =>
            set((state) => ({
                isClockVisible: show || !state.isClockVisible,
            })),
    }))
}
const uiStore = createUIStore(initUIStore())

export const useUIStore = () => {
    return useStore(uiStore)
}
