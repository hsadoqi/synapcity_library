import { SettingsModal } from '@/components'
import { Notebook } from '@/types'

export default function CurrentNotebookSettings({
    show,
    notebook,
}: {
    show: boolean
    notebook?: Partial<Notebook>
}) {
    return (
        <SettingsModal
            show={show}
            title={notebook?.name || 'Untitled Notebook'}
            description="Edit the current notebook's settings and data."
        >
            <div>Notebook Form</div>
        </SettingsModal>
    )
}
