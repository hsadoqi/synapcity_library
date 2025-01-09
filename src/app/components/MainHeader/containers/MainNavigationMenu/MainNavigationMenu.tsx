import NavigationItem from '../../components/NavigationItem/NavigationItem'
import DropdownNavigationMenu from './DropdownNavigationMenu/DropdownNavigationMenu'

const data = [
    {
        link: 'Library',
        href: '/libraries',
    },
    {
        link: 'Projects',
        href: '/projects',
    },
    {
        link: 'Areas',
        href: '/areas',
    },
    {
        link: 'Resources',
        href: '/resources',
    },
    {
        link: 'Archives',
        href: '/archives',
    },
]
export default function MainNavigationMenu() {
    return (
        <>
            <div className="w-0 lg:w-1/2">
                <div className="flex items-center justify-center gap-8 w-full mx-auto">
                    {data.map((item, index) => (
                        <NavigationItem
                            key={`nav-item-${index}`}
                            link={item.link}
                            href={item.href}
                        />
                    ))}
                </div>
            </div>
            <DropdownNavigationMenu items={data} />
        </>
    )
}
