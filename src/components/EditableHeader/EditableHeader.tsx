'use client'

import { Note, Library, Notebook } from '@/types'
import clsx from 'clsx'
import { useRef, useState, useEffect } from 'react'

export default function EditableHeader({
    data,
}: {
    data: Note | Notebook | Library | undefined
}) {
    const inputRef = useRef<HTMLInputElement | null>(null)
    const containerRef = useRef<HTMLDivElement | null>(null)

    const [inputValue, setInputValue] = useState<string>(
        data?.name || 'Untitled',
    )
    const [showTitle, setShowTitle] = useState(false)

    useEffect(() => {
        if (data) {
            setInputValue(data?.name)
        }
    }, [data, data?.name])

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(e.target as Node) &&
                inputRef.current !== e.target
            ) {
                console.log('Clicked outside, saving title:', inputValue)
                setShowTitle(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () =>
            document.removeEventListener('mousedown', handleClickOutside)
    }, [inputValue])

    return (
        <div
            ref={containerRef}
            className="h-52 size-full flex justify-start items-center text-5xl md:text-6xl font-light w-full dark:text-white border-b border-active-200 dark:border-active-800 z-[100]"
        >
            {!showTitle ? (
                <h3
                    className={clsx(
                        'px-3 py-4 stroke-active-500 cursor-pointer',
                    )}
                    onClick={() => {
                        setShowTitle(true)
                        console.log('Title clicked, entering edit mode')
                    }}
                >
                    {inputValue || 'Untitled'}
                </h3>
            ) : (
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        setShowTitle(false)
                        console.log('Form submitted, final title:', inputValue)
                    }}
                    className="px-3 py-2 absolute rounded-md bg-transparent border border-gray-400 focus:outline-none focus:ring-1 focus:ring-active-500"
                >
                    <input
                        ref={inputRef}
                        value={inputValue}
                        className="outline-none"
                        onChange={(e) => setInputValue(e.target.value)}
                        autoFocus
                        onBlur={() => {
                            setShowTitle(false)
                            console.log('Blurred, saving title:', inputValue)
                        }}
                    />
                </form>
            )}
        </div>
    )
}
