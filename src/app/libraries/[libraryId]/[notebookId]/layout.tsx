import NotebookContainer from '../notebooks/components/NotebookContainer/NotebookContainer'

export default function NotebooksLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <NotebookContainer>{children}</NotebookContainer>
}
