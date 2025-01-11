'use client'

import { useAreasStore } from '@/stores/areas-store'
import { useEffect } from 'react'

export default function AreaContainer({
    children,
    type,
    item,
}: {
    children: React.ReactNode
    item?: string
    type?: string
}) {
    const { selectActiveArea, selectActiveCategory } = useAreasStore()

    useEffect(() => {
        if (type === 'area') {
            selectActiveArea(item!)
        } else if (type === 'category') {
            selectActiveCategory(item!)
        }
    })
    return <div>{children}</div>
}
