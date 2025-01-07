'use client'

import { ThemeProvider } from '@/providers/theme-store-provider'
import { UIStoreProvider } from '@/providers/ui-store-provider'

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider>
            <UIStoreProvider>{children}</UIStoreProvider>
        </ThemeProvider>
    )
}
