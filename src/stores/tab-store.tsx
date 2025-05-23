import { createStore, useStore } from 'zustand'

export type TabState = {
    isPanelVisible: boolean
    activeTab: string | null
}

export type TabActions = {
    togglePanel: (open?: boolean) => void
    openActiveTab: (tab: string) => void
    setActiveTab: (tab: string | null) => void
}

export type TabStore = TabState & TabActions

export const initTabStore = (): TabState => ({
    isPanelVisible: false,
    activeTab: null,
})

export const createTabStore = (initState: TabState = initTabStore()) => {
    return createStore<TabStore>((set) => ({
        ...initState,
        togglePanel: (open) =>
            set((state) => ({
                isPanelVisible: open ?? !state.isPanelVisible,
            })),
        openActiveTab: (tab) =>
            set(() => ({
                activeTab: tab,
            })),
        setActiveTab: (tab) =>
            set(() => ({
                activeTab: tab,
            })),
    }))
}

const tabStore = createTabStore(initTabStore())

export const useTabStore = () => {
    return useStore(tabStore)
}
