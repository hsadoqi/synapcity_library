'use client'

import { PencilLineIcon } from 'lucide-react'
import Link from 'next/link'

export default function HomeLink() {
    return (
        <Link
            href="/"
            className="flex items-center justify-evenly gap-2 p-2 rounded-md border shadow-sm hover:shadow-md shadow-gray-200 dark:shadow-gray-800"
        >
            <PencilLineIcon />
            <h1>SynapCity</h1>
        </Link>
    )
}
