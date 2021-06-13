import Link from 'next/link'

import{ AiOutlineHome } from 'react-icons/ai'
import{ BiBookHeart } from 'react-icons/bi'

import Person from '../../../public/woman.svg'
import styles from '../../styles/module/menuFloating.module.css'

const MenuFloating = () => {
    return (
        <article className={styles.menu}>
            <nav className={styles.menuContainer}>
                <Link href="/home">
                    <AiOutlineHome className={styles.icone}/>
                </Link>
               
                <Link href="/schedule">
                    <BiBookHeart className={styles.icone}/>
                </Link>

                <Link href="/home">
                    <Person className={styles.icone}/>
                </Link>
            </nav>
        </article>
    )
}

export default MenuFloating