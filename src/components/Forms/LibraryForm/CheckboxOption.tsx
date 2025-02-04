'use client'

import { Checkbox } from '@/components/ui/checkbox'
import { Library } from '@/types'

interface CheckboxOptionProps {
    attribute: string
    defaultValue: boolean
    label: string
    updateValues: (values: Partial<Library>) => void
}

export default function CheckboxOption({
    attribute,
    defaultValue,
    label,
    updateValues,
}: CheckboxOptionProps) {
    return (
        <div className="flex gap-2 items-center">
            <Checkbox
                defaultChecked={defaultValue}
                onCheckedChange={(checked) =>
                    updateValues({ [attribute]: checked })
                }
            />
            <h3>{label}</h3>
        </div>
    )
}
