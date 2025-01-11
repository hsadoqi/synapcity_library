import { Button } from '@/components'
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { NavigationItem } from '..'
import { LucideMenu as HamburgerMenu } from 'lucide-react'

type Item = {
    label: string
    slug: string
}

interface DropdownMenuProps {
    trigger: React.ReactNode
    items: Item[]
    isOpen?: boolean
}
export default function DropdownMenuComponent({
    items,
    trigger,
    isOpen,
}: DropdownMenuProps) {
    return (
        <div className="lg:hidden flex gap-3">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    {trigger || (
                        <Button
                            size="icon"
                            variant={isOpen ? 'inner' : 'ghost'}
                        >
                            <HamburgerMenu />
                        </Button>
                    )}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
                    {items.map((item, index) => (
                        <DropdownMenuItem
                            key={`dropdown-${index}`}
                            className="justify-center"
                        >
                            <NavigationItem
                                label={item.label}
                                slug={item.slug}
                            />
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
