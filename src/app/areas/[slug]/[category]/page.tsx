import { AreaContainer } from '../../components/AreaContainer'
export default async function AreaCategoryPage({
    params,
}: {
    params: Promise<{ category: string }>
}) {
    const { category } = await params

    return <AreaContainer>Area Section: {category}</AreaContainer>
}
