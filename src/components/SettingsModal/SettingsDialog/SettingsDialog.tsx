import {
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from '@/components/ui/dialog'

export interface SettingsDialogProps {
    title: string
    description: string
    children: React.ReactNode
}

export default function SettingsDialog({
    title,
    description,
    children,
}: SettingsDialogProps) {
    return (
        <DialogContent className="max-h-3/4 overflow-y-auto">
            <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>{description}</DialogDescription>
            </DialogHeader>
            {children}
        </DialogContent>
    )
}
