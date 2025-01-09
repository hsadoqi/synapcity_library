import { Container } from './components/Container'
export default function LibraryLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <Container>{children}</Container>
}
