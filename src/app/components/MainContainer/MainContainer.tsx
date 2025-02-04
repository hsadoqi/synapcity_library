import MainContentContainer from './containers/MainContent/MainContentContainer'
import { MainHeader as Header } from '../MainHeader'

export default function MainContainer({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="full-screen-container overflow-hidden">
            <Header />
            <MainContentContainer>{children}</MainContentContainer>
        </div>
    )
}
