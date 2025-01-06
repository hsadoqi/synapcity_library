import { ThemeWrapper } from '@/components/theming/ThemeWrapper'
import HoverWrapper from './HoverWrapper'
import styles from './MainHeader.module.css'
import clsx from 'clsx'

export default function MainHeader() {
    return (
        <header className={clsx(styles.headerContainer)}>
            <HoverWrapper>
                <nav className="w-full h-full flex justify-between items-center px-4 shadow-sm hover:shadow-md dark:shadow-gray-300 shadow-gray-950">
                    Navbar
                    <ThemeWrapper />
                </nav>
            </HoverWrapper>
        </header>
    )
}
