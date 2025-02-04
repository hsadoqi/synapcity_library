import { Note } from '@/types'
import { PageHeaderWrapper } from '../PageHeaderWrapper'

export default function PageWrapper({
    note,
    children,
}: {
    note: Note
    children: React.ReactNode
}) {
    console.log(note)
    return (
        <main className="flex flex-col min-h-full shadow-active-500 shadow-md relative">
            <div className="h-1/5 bg-active-50 dark:bg-active-950 z-0 absolute inset-0 md:min-h-32" />
            <div className="inset-0 absolute z-10 bg-white/50 dark:bg-black/50" />
            <div className="container mx-auto h-full z-20 shadow-md bg-white dark:bg-neutral-950">
                <PageHeaderWrapper note={note} />
                <div className="px-8 divider before:bg-active-700 after:bg-active-700 dark:before:bg-active-700 dark:after:bg-active-700 before:opacity-30 after:opacity-30" />
                <div className="py-6 px-8 flex-1">{children}</div>
            </div>
        </main>
    )
}
