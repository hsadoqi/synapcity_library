'use client'

import { useEffect } from 'react'
import {
    AreasList,
    HomeLinkButton,
    LockButton,
    PanelButton,
} from '../../components'
import { MainHeaderMenu } from '../MainHeaderMenu'
import { MainNavigationMenu } from '../MainNavigationMenu'
import { useAreasStore } from '@/stores/areas-store'
import { usePathname } from 'next/navigation'

export default function MainNavigationContainer() {
    const {
        isAreasHeaderVisible,
        activeArea,
        setAreasHeader,
        resetActiveState,
    } = useAreasStore()
    const pathname = usePathname()

    useEffect(() => {
        if (pathname === '/areas') {
            if (!activeArea) {
                setAreasHeader(true)
                // resetActiveState()
            }
        }
    }, [activeArea, pathname, resetActiveState, setAreasHeader])

    return (
        // <nav className="w-full h-full flex justify-between items-center pr-2 md:px-4 shadow-sm">
        <>
            <div className="flex items-center justify-end md:justify-between gap-2 p-2">
                <LockButton />
                <HomeLinkButton />
                <PanelButton />
            </div>
            {isAreasHeaderVisible ||
            activeArea ||
            pathname.startsWith('/areas') ? (
                <AreasList />
            ) : (
                <MainNavigationMenu />
            )}
            <MainHeaderMenu />
        </>
        // </nav>
    )
}
