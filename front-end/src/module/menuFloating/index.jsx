import Link from 'next/link'
import Home from '../../../public/home.svg'
import Person from '../../../public/woman.svg'
import Diary from '../../../public/diary.svg'
import styles from '../../styles/module/menuFloating.module.css'

const MenuFloating = () => {
    return (
        <article className={styles.menu}>
            <nav className={styles.menuContainer}>
                <Link href="/home">
                    <Home className={styles.icone}/>
                </Link>
               
                <Link href="/home">
                    <Diary className={styles.icone}/>
                </Link>

                <Link href="/home">
                    <Person className={styles.icone}/>
                </Link>
            </nav>
        </article>
    )
}

export default MenuFloating