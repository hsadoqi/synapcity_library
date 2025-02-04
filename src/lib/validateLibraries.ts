import libraryData from './data/libraries.json'
import { Library } from '@/types/libraryData'
import { Color } from '@/types/styling'

function mapColor(color: string): Color {
    if (Object.values(Color).includes(color as Color)) {
        return color as Color
    }
    return Color.Neutral
}

const transformedLibraries: Library[] = (
    libraryData as unknown as Library[]
).map((library) => ({
    ...library,
    color: mapColor(library.color),
    createdAt: new Date(library.createdAt),
    updatedAt: new Date(library.updatedAt),
    lastAccessedAt: new Date(library.lastAccessedAt),
}))

export default transformedLibraries
