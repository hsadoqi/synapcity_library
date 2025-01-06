import { createStore } from 'zustand'

export type UIState = {
    isHeaderVisible: boolean
    isHeaderPanelVisible: boolean
}

export type UIActions = {
    setIsHeaderVisible: (open?: boolean) => void
    setIsHeaderPanelVisible: (open?: boolean) => void
}

export type UIStore = UIState & UIActions

export const initUIStore = (): UIState => {
    return {
        isHeaderVisible: true,
        isHeaderPanelVisible: false,
    }
}

export const defaultInitState: UIState = {
    isHeaderPanelVisible: false,
    isHeaderVisible: true,
}

export const createUIStore = (initState: UIState = defaultInitState) => {
    return createStore<UIStore>()((set) => ({
        ...initState,
        setIsHeaderPanelVisible: (open) =>
            set((state) => ({
                isHeaderPanelVisible: open || !state.isHeaderPanelVisible,
            })),
        setIsHeaderVisible: (open) =>
            set((state) => ({
                isHeaderVisible: open || !state.isHeaderVisible,
            })),
    }))
}
