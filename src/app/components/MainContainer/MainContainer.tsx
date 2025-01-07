'use client'

import MainContentContainer from './containers/MainContent/MainContentContainer'
import { MainHeader as Header } from '../MainHeader'
import { TabWrapper } from './containers'

export default function MainContainer({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="full-screen-container overflow-hidden">
            <TabWrapper>
                <Header />
                <MainContentContainer>{children}</MainContentContainer>
            </TabWrapper>
        </div>
    )
}
