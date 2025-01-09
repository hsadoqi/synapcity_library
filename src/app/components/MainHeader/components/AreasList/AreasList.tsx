import { Button, LinkButton } from '@/components'
import { LucidePlusSquare } from 'lucide-react'

const areas = [
    {
        name: 'Fitness',
        tags: ['Physical'],
        isArchived: false,
    },
    {
        name: 'Programming',
        tags: ['Code', 'Technology', 'JavaScript'],
        isArchived: false,
    },
    {
        name: 'Food',
        tags: ['Recipes', 'Health', 'Fitness'],
        isArchived: false,
    },
    {
        name: 'System Design',
        tags: ['Code', 'Technology', 'Systems', 'Architecture'],
        isArchived: false,
    },
]

export default function AreasList() {
    const addNewArea = () => {
        console.log('trigger dialog')
    }
    return (
        <div className="w-full flex justify-center items-center gap-6">
            <LinkButton href="/areas" link="Areas" />
            <div className="w-full gap-4">
                <Button onClick={() => addNewArea()}>
                    <LucidePlusSquare />
                </Button>
                <div className="w-full gap-2">
                    {areas.map((area, index) => (
                        <LinkButton
                            key={`area-${index}`}
                            href={`/areas/${area.name}`}
                            link={area.name}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
