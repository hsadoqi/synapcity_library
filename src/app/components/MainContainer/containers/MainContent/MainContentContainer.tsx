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
            className={clsx('main-container', {
                'pt-0': !isVisible,
                'pt-16': isVisible,
            })}
        >
            <div
                className={clsx(
                    'main-container p-0 shadow-md hover:shadow-lg border-t',
                )}
            >
                <MainHeaderPanel />
                <Suspense fallback={<div>Loading...</div>}>
                    <div
                        ref={mainContainerRef}
                        className={clsx(
                            'shadow-md hover:shadow-lg scroll-y-container relative',
                        )}
                    >
                        {children}
                    </div>
                </Suspense>
            </div>
        </div>
    )
}
