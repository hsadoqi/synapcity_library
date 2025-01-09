import { Button } from '@/components'
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import NavigationItem from '../../../components/NavigationItem/NavigationItem'
import { LucideMenu as HamburgerMenu } from 'lucide-react'

type Item = {
    link: string
    href: string
}

interface DropdownNavigationMenuProps {
    items: Item[]
}
export default function DropdownNavigationMenu({
    items,
}: DropdownNavigationMenuProps) {
    return (
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
                    {items.map((item, index) => (
                        <DropdownMenuItem key={`dropdown-${index}`}>
                            <NavigationItem {...item} />
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
