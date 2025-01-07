import { MainNavigationMenu, MainHeaderMenu, HoverWrapper } from './containers'
import { HomeLink, PanelButton } from './components'

export default function MainHeader() {
    return (
        <header className="header-container">
            <HoverWrapper>
                <nav className="w-full h-full flex justify-between items-center px-4 shadow-sm">
                    <div className="flex items-center justify-between gap-2 p-2">
                        <HomeLink />
                        <PanelButton />
                    </div>
                    <MainNavigationMenu />
                    <MainHeaderMenu />
                </nav>
            </HoverWrapper>
        </header>
    )
}
