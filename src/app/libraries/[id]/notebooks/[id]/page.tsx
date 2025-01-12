'use client'

import { useNotebookStore } from '@/stores/notebook-store'

export default function NotebookPage() {
    const { selectedNotebook } = useNotebookStore()
    return (
        <div className="h-full w-full flex justify-center items-center">
            <h3>{selectedNotebook?.name}</h3>
        </div>
    )
}
