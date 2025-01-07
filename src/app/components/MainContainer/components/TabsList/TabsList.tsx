import { TabItem } from '../TabItem'
import { Cog } from 'lucide-react'

const data = [
    {
        tab: 'date',
        children: 'Today',
    },
    {
        tab: 'settings',
        children: <Cog size={20} />,
        icon: true,
    },
]

export default function TabsList() {
    return (
        <div className="flex items-center justify-start gap-1 px-2 py-1 border shadow-sm hover:shadow-md">
            {data.map((item, index) => (
                <TabItem key={`tab-${index}`} tab={item.tab} icon={item.icon}>
                    {item.children}
                </TabItem>
            ))}
        </div>
    )
}
