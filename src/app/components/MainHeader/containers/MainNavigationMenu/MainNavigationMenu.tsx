import { Button } from '@/components'
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { LucideMenu as HamburgerMenu } from 'lucide-react'
import NavigationItem from '../../components/NavigationItem/NavigationItem'

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
            <div className="flex-1 w-0 lg:w-full -translate-y-full lg:translate-y-0 opacity-0 lg:opacity-100">
                <div className="flex items-center justify-evenly gap-8 w-1/2 mx-auto">
                    {data.map((item, index) => (
                        <NavigationItem
                            key={`nav-item-${index}`}
                            link={item.link}
                            href={item.href}
                        />
                    ))}
                </div>
            </div>
            <div className="lg:hidden flex gap-3">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button size="icon">
                            <HamburgerMenu />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
                        <DropdownMenuItem>
                            <NavigationItem link="Home" href="/" />
                        </DropdownMenuItem>
                        {data.map((item, index) => (
                            <DropdownMenuItem key={`dropdown-${index}`}>
                                <NavigationItem {...item} />
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </>
    )
}
