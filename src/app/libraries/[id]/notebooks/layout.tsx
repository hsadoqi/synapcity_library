import NotebookContainer from './components/NotebookContainer/NotebookContainer'

export default function NotebooksLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <NotebookContainer>
            Layout
            {children}
        </NotebookContainer>
    )
}
