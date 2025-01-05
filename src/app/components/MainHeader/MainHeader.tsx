import styles from './MainHeader.module.css'
import clsx from 'clsx'

export default function MainHeader() {
    return (
        <header className={clsx(styles.headerContainer)}>
            <div className={clsx(styles.hoverableContainer, 'group')}>
                <div className={clsx(styles.header, 'group-hover:visible')}>
                    Header
                </div>
            </div>
        </header>
    )
}
