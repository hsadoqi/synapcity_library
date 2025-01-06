import styles from './MainContainer.module.css'

import { MainHeader as Header } from '../MainHeader'
import clsx from 'clsx'

export default function MainContainer({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="full-screen-container mb-4">
            <Header />
            <div className={styles.mainContainer}>
                <div
                    className={clsx(styles.scrollYContainer, 'max-w-7xl pt-16')}
                >
                    {children}
                </div>
            </div>
        </div>
    )
}
