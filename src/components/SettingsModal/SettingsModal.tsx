import { Cog } from 'lucide-react'
import { Button } from '../ui'
import { Dialog, DialogTrigger } from '../ui/dialog'
import { SettingsDialog, SettingsDialogProps } from './SettingsDialog'

export default function SettingsModal({
    show,
    ...props
}: { show: boolean } & SettingsDialogProps) {
    if (!show) return null

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    className="px-3 hover:bg-active-200 dark:hover:bg-active-900"
                    variant="outline"
                    size="icon"
                >
                    <Cog />
                </Button>
            </DialogTrigger>
            <SettingsDialog {...props} />
        </Dialog>
    )
}
