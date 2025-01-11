'use client'

import { useAreasStore } from '@/stores/areas-store'
import { PencilLineIcon } from 'lucide-react'
import Link from 'next/link'

export default function HomeLinkButton() {
    const { isAreasHeaderVisible } = useAreasStore()
    return (
        <Link
            href="/"
            className="flex items-center justify-evenly gap-2 p-2 rounded-md shadow-sm hover:shadow-md shadow-gray-200 dark:shadow-gray-800"
        >
            <PencilLineIcon />
            {!isAreasHeaderVisible && <h1>SynapCity</h1>}
        </Link>
    )
}
