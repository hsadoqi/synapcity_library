import { create, useStore } from 'zustand'

export type UIState = {
    isClockVisible: boolean
}

export type UIActions = {
    toggleClock: (show?: boolean) => void
}

export type UIStore = UIState & UIActions

export const initUIStore = (): UIState => {
    return {
        isClockVisible: true,
    }
}

export const defaultInitState: UIState = {
    isClockVisible: true,
}

export const createUIStore = (initState: UIState = defaultInitState) => {
    return create<UIStore>((set) => ({
        ...initState,
        toggleClock: (show) =>
            set((state) => ({
                isClockVisible:
                    show !== undefined ? show : !state.isClockVisible,
            })),
    }))
}

const uiStore = createUIStore(initUIStore())

export const useUIStore = () => {
    return useStore(uiStore)
}
