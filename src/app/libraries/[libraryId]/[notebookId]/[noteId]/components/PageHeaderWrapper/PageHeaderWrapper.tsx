import { Note } from '@/types'

export default function PageHeaderWrapper({ note }: { note: Note }) {
    console.log('header', note)
    return (
        <div className="@container/main flex flex-col min-h-16 md:min-h-32 h-1/5 size-full relative px-8">
            <div className="hidden sm:flex items-center justify-end h-16 drop-shadow-md drop-shadow-active-500">
                Breadcrumbs
            </div>
            <div className="relative flex-1 flex flex-col items-start justify-center md:justify-around h-full sm:gap-4">
                <h1 className="font-bold transition-all duration-300 ease-in-out text-2xl @sm/main:text-3xl @lg/main:text-4xl @xl/main:text-5xl pt-2 pb-4">
                    {note.name}
                </h1>
                <div className="flex gap-2">
                    {note.tags.map((tag, index) => (
                        <div
                            key={`tag-${index}`}
                            className="shadow-sm hover:shadow-md inline-flex place-items-center badge bg-transparent text-active-800 border-active-500 dark:border-active-300 dark:text-active-300  dark:hover:text-active-100  dark:hover:bg-active-900 hover:bg-active-500 hover:text-white transition-all duration-300 ease-in-out"
                        >
                            {tag}
                        </div>
                    ))}
                </div>
                <div className="absolute right-0 top-4">Metadata</div>
            </div>
        </div>
    )
}
