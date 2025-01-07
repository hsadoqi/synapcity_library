'use client'

import { ErrorBoundary, ErrorBoundaryProps } from '@/components'

export default function Error({ props }: { props: ErrorBoundaryProps }) {
    return <ErrorBoundary {...props} />
}
