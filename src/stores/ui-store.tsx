import { createStore } from 'zustand'

export type UIState = {
    isHeaderVisible: boolean
    isHeaderLocked: boolean
}

export type UIActions = {
    setIsHeaderVisible: (open?: boolean) => void
    toggleHeaderLock: (open?: boolean) => void
}

export type UIStore = UIState & UIActions

export const initUIStore = (): UIState => {
    return {
        isHeaderVisible: true,
        isHeaderLocked: true,
    }
}

export const defaultInitState: UIState = {
    isHeaderVisible: true,
    isHeaderLocked: true,
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
    }))
}
