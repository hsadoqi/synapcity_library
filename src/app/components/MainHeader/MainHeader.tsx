'use client'

import { useHeaderStore } from '@/stores/header-store'
import { HoverWrapper } from './containers'
import MainNavigationContainer from './containers/MainNavigationContainer/MainNavigationContainer'
import clsx from 'clsx'
export default function MainHeader() {
    const { isVisible } = useHeaderStore()
    return (
        <header
            className={clsx('header-container', {
                'absolute h-4 z-10 transition-all duration-300 ease-in-out opacity-0':
                    !isVisible,
                'opacity-100': isVisible,
            })}
        >
            <HoverWrapper>
                <MainNavigationContainer />
            </HoverWrapper>
        </header>
    )
}
