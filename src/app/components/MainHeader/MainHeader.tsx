'use client'

import { clsx } from 'clsx'
import { HoverWrapper } from './containers'
import MainNavigationContainer from './containers/MainNavigationContainer/MainNavigationContainer'

export default function MainHeader() {
    return (
        <header className={clsx('header-container z-30', {})}>
            <HoverWrapper>
                <MainNavigationContainer />
            </HoverWrapper>
        </header>
    )
}
