'use client'

import { ThemeProvider } from '@/contexts'
import { UIStoreProvider } from '@/providers/ui-store-provider'
export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider>
            <UIStoreProvider>{children}</UIStoreProvider>
        </ThemeProvider>
    )
}
