import { AreaContainer } from '../components/AreaContainer'

export default async function AreaSlugPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params

    return (
        <AreaContainer item={slug} type="slug">
            Area: {slug}
        </AreaContainer>
    )
}
