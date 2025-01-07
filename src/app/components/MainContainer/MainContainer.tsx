'use client'

import MainContent from './containers/MainContent/MainContent'
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
                <MainContent>{children}</MainContent>
            </TabWrapper>
        </div>
    )
}
