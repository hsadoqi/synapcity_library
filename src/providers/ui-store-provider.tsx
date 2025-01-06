'use client'

import { type ReactNode, createContext, useRef, useContext } from 'react'
import { useStore } from 'zustand'

import { type UIStore, createUIStore, initUIStore } from '@/stores/ui-store'

export type UIStoreApi = ReturnType<typeof createUIStore>

export const UIStoreContext = createContext<UIStoreApi | undefined>(undefined)

export interface UIStoreProviderProps {
    children: ReactNode
}

export const UIStoreProvider = ({ children }: UIStoreProviderProps) => {
    const storeRef = useRef<UIStoreApi>(undefined)

    if (!storeRef.current) {
        storeRef.current = createUIStore(initUIStore())
    }

    return (
        <UIStoreContext.Provider value={storeRef.current}>
            {children}
        </UIStoreContext.Provider>
    )
}

export const useUIStore = <T,>(selector: (store: UIStore) => T): T => {
    const uiStoreContext = useContext(UIStoreContext)

    if (!uiStoreContext) {
        throw new Error(
            `useCounterStore must be used within CounterStoreProvider`,
        )
    }

    return useStore(uiStoreContext, selector)
}
