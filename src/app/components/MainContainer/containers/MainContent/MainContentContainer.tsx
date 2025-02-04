'use client'

import clsx from 'clsx'
import { MainHeaderPanel } from '../../../MainHeader/containers'
import { useTabStore } from '@/stores/tab-store'
import { useRef, useEffect, Suspense } from 'react'
import { useHeaderStore } from '@/stores/header-store'

export default function MainContentContainer({
    children,
}: {
    children: React.ReactNode
}) {
    const { togglePanel, isPanelVisible } = useTabStore()
    const { isVisible } = useHeaderStore()
    const mainContainerRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const handleClickInsideContainer = (event: MouseEvent) => {
            if (isPanelVisible) {
                if (
                    mainContainerRef.current &&
                    mainContainerRef.current.contains(event.target as Node)
                ) {
                    togglePanel(false)
                }
            }
        }

        document.addEventListener('mousedown', handleClickInsideContainer)

        return () => {
            document.removeEventListener(
                'mousedown',
                handleClickInsideContainer,
            )
        }
    }, [isPanelVisible, togglePanel])

    return (
        <div
            className={clsx(
                'main-container flex flex-col size-full relative transition-all duration-1000 ease-in-out',
                {
                    'pt-0 delay-300': !isVisible,
                },
            )}
        >
            <MainHeaderPanel />
            <Suspense fallback={<div>Loading...</div>}>
                <div
                    ref={mainContainerRef}
                    id="main-content-container"
                    className={clsx(
                        'scroll-y-container relative flex flex-col flex-1 size-full',
                    )}
                >
                    {children}
                </div>
            </Suspense>
        </div>
    )
}
