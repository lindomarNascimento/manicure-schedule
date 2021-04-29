import styles from '../../styles/pages/Initial.module.css'
import Logo from '../../../public/logo.svg'

export default function initial() {
    return (
        <div className={styles.initialContainer} >
            <div className={styles.logo}>
                <Logo />
                <span className={styles.title}>Nails</span>
            </div>
            <div className={styles.textWelcome}>Seja bem-vindo!</div>
            <div className={styles.textDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            </div>

            <div className={styles.buttons}>
                <button className={styles.button}>Quero me Cadastrar</button>
                <button className={styles.button}>Já sou cadastrado</button>
            </div>


        </div>
    )
}
