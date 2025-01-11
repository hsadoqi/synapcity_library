import { Button } from '@/components'
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import NavigationItem from '../../../components/NavigationItem/NavigationItem'
import { LucideMenu as HamburgerMenu } from 'lucide-react'
import { Area } from '@/stores/areas-store'

interface DropdownNavigationMenuProps {
    items: Area[]
    trigger?: React.ReactNode
}
export default function DropdownNavigationMenu({
    items,
    trigger,
}: DropdownNavigationMenuProps) {
    console.log(items, trigger)
    return (
        <div className="lg:hidden flex gap-3">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    {trigger || (
                        <Button size="icon">
                            <HamburgerMenu />
                        </Button>
                    )}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
                    <DropdownMenuItem>
                        <NavigationItem label="Home" slug="/" />
                    </DropdownMenuItem>
                    {items.map((item, index) => {
                        const { label, slug, isArchived } = item
                        return (
                            !isArchived && (
                                <DropdownMenuItem key={`dropdown-${index}`}>
                                    <NavigationItem label={label} slug={slug} />
                                </DropdownMenuItem>
                            )
                        )
                    })}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
