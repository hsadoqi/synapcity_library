import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'
import { BreadcrumbMenu } from './components' // Import your breadcrumb menu

interface AreaLayoutProps {
    children: React.ReactNode
}

export default async function AreaLayout({ children }: AreaLayoutProps) {
    return (
        <SidebarProvider>
            <SidebarInset>
                <BreadcrumbMenu />
                {children}
            </SidebarInset>
        </SidebarProvider>
    )
}
