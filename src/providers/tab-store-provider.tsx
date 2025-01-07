'use client'

import { type ReactNode, createContext, useRef } from 'react'

import { createTabStore, initTabStore } from '@/stores/tab-store'

export type TabStoreApi = ReturnType<typeof createTabStore>

export const TabStoreContext = createContext<TabStoreApi | undefined>(undefined)

export interface TabStoreProviderProps {
    children: ReactNode
}

export const TabStoreProvider = ({ children }: TabStoreProviderProps) => {
    const storeRef = useRef<TabStoreApi>(undefined)

    if (!storeRef.current) {
        storeRef.current = createTabStore(initTabStore())
    }

    return (
        <TabStoreContext.Provider value={storeRef.current}>
            {children}
        </TabStoreContext.Provider>
    )
}
