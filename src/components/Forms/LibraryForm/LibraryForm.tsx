'use client'

import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { IconPicker } from '../IconPicker'
import { useLibraryStore } from '@/stores/library-store'
import { Library } from '@/types'
import CheckboxOption from './CheckboxOption'
import { useState } from 'react'

const tailwindColors = [
    'red',
    'green',
    'blue',
    'yellow',
    'purple',
    'pink',
    'gray',
    'indigo',
    'teal',
    'cyan',
    'orange',
    'lime',
    'emerald',
    'violet',
    'fuchsia',
    'rose',
    'amber',
    'sky',
    'neutral',
    'stone',
    'slate',
    'zinc',
] as const

const librarySchema = z.object({
    name: z.string().min(1, 'Name is required'),
    color: z.enum(tailwindColors),
    icon: z.string(),
    tags: z.array(z.string()),
    isStarred: z.boolean(),
    isArchived: z.boolean(),
    isDeleted: z.boolean(),
    // deletedAt: z.date().optional(),
    // createdAt: z.date(),
    // updatedAt: z.date(),
    // lastAccessedAt: z.date(),
    // default: z.boolean().optional()
})

type LibraryFormValues = z.infer<typeof librarySchema>

type LibraryFormProps = {
    defaultValues?: Partial<LibraryFormValues>
}

export default function LibraryForm({ defaultValues }: LibraryFormProps) {
    const { updateLibrary, selectedLibrary } = useLibraryStore()
    const [currentValues, setCurrentValues] = useState<
        Partial<LibraryFormValues>
    >(defaultValues || {})

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<LibraryFormValues>({
        resolver: zodResolver(librarySchema),
        defaultValues,
    })

    const onSubmit = (data: Partial<LibraryFormValues>) => {
        console.log('before', data, currentValues, selectedLibrary)
        updateLibrary(data as Partial<Library>)
        console.log('after', data, currentValues, selectedLibrary)
    }

    const updateValues = (values: Partial<LibraryFormValues>) => {
        console.log('updatinggggg', values)
        setCurrentValues({
            ...currentValues,
            ...values,
        })
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 flex flex-col"
        >
            <Input
                {...register('name')}
                placeholder="Library Name"
                defaultValue={currentValues?.name}
            />
            {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
            )}
            <Controller
                control={control}
                name="color"
                render={({ field }) => (
                    <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value || 'neutral'}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Select a color" />
                        </SelectTrigger>
                        <SelectContent>
                            {tailwindColors.map((color) => (
                                <SelectItem key={color} value={color}>
                                    {color}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                )}
            />

            {/* 
      <Select {...register("color")} defaultValue={currentValues?.color || 'neutral'}>
        <SelectTrigger>
          <SelectValue placeholder="Select a color" />
        </SelectTrigger>
        <SelectContent>
          {tailwindColors.map((color) => (
            <SelectItem key={color} value={color} onSelect={() => updateValues({ color })}>{color}</SelectItem>
          ))}
        </SelectContent>
      </Select> */}

            <Controller
                control={control}
                name="icon"
                render={({ field }) => (
                    <IconPicker value={field.value} onChange={field.onChange} />
                )}
            />

            {/* <Controller
        control={control}
        name="tags"
        render={({ field }) => (
          <TagInput {...field} placeholder="Enter tags" defaultValue={currentValues?.tags || []} />
        )}
      /> */}

            <div className="flex w-full justify-around items-center">
                {[
                    {
                        attribute: 'isStarred',
                        defaultValue: currentValues?.isStarred,
                        label: currentValues?.isStarred
                            ? 'Remove Star'
                            : 'Starred',
                    },
                    {
                        attribute: 'isArchived',
                        defaultValue: currentValues?.isArchived,
                        label: currentValues?.isArchived
                            ? 'Unarchive'
                            : 'Archive',
                    },
                    {
                        attribute: 'isDeleted',
                        defaultValue: currentValues?.isDeleted,
                        label: currentValues?.isDeleted ? 'Restore' : 'Delete',
                    },
                ].map((item) => (
                    <Controller
                        key={item.attribute}
                        control={control}
                        name={
                            item.attribute as
                                | 'isStarred'
                                | 'isArchived'
                                | 'isDeleted'
                        }
                        render={({ field }) => (
                            <CheckboxOption
                                attribute={item.attribute}
                                defaultValue={field.value || false}
                                label={item.label}
                                updateValues={updateValues}
                            />
                        )}
                    />
                ))}
            </div>
            <Button
                type="submit"
                variant="outline"
                onClick={() => onSubmit(currentValues)}
            >
                Submit
            </Button>
        </form>
    )
}
