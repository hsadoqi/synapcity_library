import { HoverWrapper } from './containers'
import MainNavigationContainer from './containers/MainNavigationContainer/MainNavigationContainer'

export default function MainHeader() {
    return (
        <header className="header-container">
            <HoverWrapper>
                <MainNavigationContainer />
            </HoverWrapper>
        </header>
    )
}
