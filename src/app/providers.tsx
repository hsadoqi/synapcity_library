'use client'

import { ThemeProvider } from '@/providers/theme-store-provider'
import { TabStoreProvider } from '@/providers/tab-store-provider'
import { UIStoreProvider } from '@/providers/ui-store-provider'
export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider>
            <UIStoreProvider>
                <TabStoreProvider>{children}</TabStoreProvider>
            </UIStoreProvider>
        </ThemeProvider>
    )
}
