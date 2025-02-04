import { LinkButton } from '@/components'
import { headers } from 'next/headers'

export default async function NotFound() {
    const headersList = await headers()
    const domain = headersList.get('host')
    const protocol = headersList.get('x-forwarded-proto') || 'https'

    const fullPath = headersList.get('x-forwarded-uri') || '/'
    const fullUrl = `${protocol}://${domain}${fullPath}`

    console.log('Full URL:', fullUrl)

    return (
        <div className="h-full w-full flex flex-col items-center justify-center">
            <h2>Not Found: {fullUrl}</h2>
            <p>Could not find requested resource</p>
            <LinkButton label="Return Home" href="/" />
        </div>
    )
}
