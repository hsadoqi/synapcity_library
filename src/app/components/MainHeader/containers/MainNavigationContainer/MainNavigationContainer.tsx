import { HomeLinkButton, LockButton, PanelButton } from '../../components'
import { MainHeaderMenu } from '../MainHeaderMenu'
import { MainNavigationMenu } from '../MainNavigationMenu'

export default function MainNavigationContainer() {
    return (
        <nav className="w-full h-full flex justify-between items-center px-4 shadow-sm">
            <div className="flex items-center justify-between gap-2 p-2">
                <LockButton />
                <HomeLinkButton />
                <PanelButton />
            </div>
            <MainNavigationMenu />
            <MainHeaderMenu />
        </nav>
    )
}
