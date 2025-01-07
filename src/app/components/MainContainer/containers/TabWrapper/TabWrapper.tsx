'use client'

import { TabStoreProvider } from '@/providers/tab-store-provider'

export default function TabWrapper({
    children,
}: {
    children: React.ReactNode
}) {
    return <TabStoreProvider>{children}</TabStoreProvider>
}
