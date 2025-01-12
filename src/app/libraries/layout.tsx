import { SidebarContainer } from './components/SidebarContainer'

export default function LibraryLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <SidebarContainer>{children}</SidebarContainer>
}
