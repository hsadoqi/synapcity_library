export default function TabContainer({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="shadow-sm rounded dark:shadow-md p-4">{children}</div>
    )
}
