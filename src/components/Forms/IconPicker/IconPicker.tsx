'use client'

import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '@/components/ui/command'

const fetchIcons = async (query: string) => {
    const response = await fetch(
        `https://api.iconify.design/search?query=${query}&pretty=1`,
    )
    console.log(response)
    const data = await response.json()
    return data.icons || []
}

interface IconPickerProps {
    value: string
    onChange: (icon: string) => void
}

const IconPicker = ({ value, onChange }: IconPickerProps) => {
    const [searchQuery, setSearchQuery] = useState('home')
    const [icons, setIcons] = useState<string[]>([])
    const [showIcons, setShowIcons] = useState(false)

    useEffect(() => {
        async function getIcons() {
            if (searchQuery) {
                const iconsData = await fetchIcons(searchQuery)
                console.log('icons data', iconsData)

                Promise.all(iconsData).then((allIcons) => {
                    setIcons(allIcons.flat())
                })
            } else {
                setIcons([])
            }
        }
        getIcons()
    }, [searchQuery])

    const handleSearchChange = (query: string) => {
        setSearchQuery(query)
    }

    return (
        <div className="flex flex-col justify-center items-center border-2 py-8 px-6 gap-4">
            <button
                onClick={() => setShowIcons((prev) => !prev)}
                className="size-12 p-2 inline-flex justify-center items-center border-2 border-active-500 rounded-md text-active-900 hover:bg-active-200 dark:stroke-white dark:hover:text-white dark:hover:bg-active-800"
            >
                {value ? (
                    <>
                        <Icon icon={value} width="auto" height="auto" />
                        <span aria-hidden="true" className="hidden">
                            {value}
                        </span>
                    </>
                ) : (
                    'Select an icon'
                )}
            </button>
            {showIcons && (
                <Command className="h-auto shadow-inner">
                    <CommandInput
                        placeholder="Type a command or search..."
                        onValueChange={handleSearchChange}
                    />
                    <CommandList>
                        <div className="min-h-32 h-32 overflow-y-auto shadow-inner">
                            <CommandEmpty>No results found.</CommandEmpty>
                            <CommandGroup heading="Suggestions">
                                <div className="grid grid-cols-4 grid-rows-auto">
                                    {icons.map((icon) => (
                                        <CommandItem
                                            key={icon}
                                            onSelect={() => onChange(icon)}
                                            value={icon}
                                            className="hover:cursor-pointer"
                                        >
                                            <Icon
                                                icon={icon}
                                                width={32}
                                                height={32}
                                            />
                                            <span
                                                aria-hidden={true}
                                                className="hidden"
                                            >
                                                {icon}
                                            </span>
                                        </CommandItem>
                                    ))}
                                </div>
                            </CommandGroup>
                        </div>
                    </CommandList>
                </Command>
            )}
        </div>
    )
}

export default IconPicker
