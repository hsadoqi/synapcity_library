import { Note } from '@/types'

export default function PageContent({ note }: { note: Note }) {
    console.log('content', note)
    return (
        <div className="flex flex-col justify-center items-start py-6 px-8">
            {note?.content}
        </div>
    )
}
