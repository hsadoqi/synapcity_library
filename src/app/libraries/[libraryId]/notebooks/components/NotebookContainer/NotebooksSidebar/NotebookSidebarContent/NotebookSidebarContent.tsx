'use client'

import {
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    useSidebar,
} from '@/components/ui/sidebar'
import { useNotebookStore } from '@/stores/notebook-store'
import { useNoteStore } from '@/stores/note-store'
import { NotebookSidebarItem } from './NotebookSidebarItem'

export default function NotebookSidebarContent() {
    const { setOpen, open } = useSidebar()
    const { notebooks, selectedNotebook, setNotebook } = useNotebookStore()
    const { setNote } = useNoteStore()

    return (
        <SidebarContent>
            <SidebarGroup>
                <SidebarGroupContent className="px-1.5 md:px-0 ">
                    <SidebarMenu>
                        {notebooks.map((notebook, index) => (
                            <NotebookSidebarItem
                                key={`notebook-${index}`}
                                notebook={notebook}
                                isActive={
                                    (selectedNotebook &&
                                        selectedNotebook?.id === notebook.id) ||
                                    (!selectedNotebook && notebook.default)
                                }
                                onClick={() => {
                                    setOpen(
                                        notebook !== selectedNotebook || !open,
                                    )
                                    setNotebook(notebook)
                                    if (notebook !== selectedNotebook) {
                                        setNote(null)
                                    }
                                }}
                            />
                        ))}
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
    )
}
