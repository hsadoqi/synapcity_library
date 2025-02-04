import { SettingsModal } from '@/components'
import { LibraryForm } from '@/components/Forms'
import { Library } from '@/types'

export default function CurrentLibrarySettings({
    show,
    library,
}: {
    show: boolean
    library?: Partial<Library>
}) {
    return (
        library && (
            <SettingsModal
                show={show}
                title={library?.name || 'Untitled Library'}
                description="Edit the current library's settings and data."
            >
                <LibraryForm defaultValues={library} />
            </SettingsModal>
        )
    )
}
