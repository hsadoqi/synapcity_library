'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export interface ErrorBoundaryProps {
    error: Error & { digest?: string }
    reset: () => void
}

export default function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {
    const router = useRouter()
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div>
            <h2>Something went wrong!</h2>
            <button onClick={() => reset()}>Try again</button>
            <button onClick={() => router.back()}>Back</button>
        </div>
    )
}
