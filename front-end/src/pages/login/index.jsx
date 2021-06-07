import Link from "next/link";
import { useState } from "react";

import styles from "../../styles/pages/Initial.module.css";

export default function initial() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.initialContainer}>
      <form className={styles.formLogin}>
        <div className={styles.textWelcome}>Login</div>

        <input
          type="text"
          placeholder="Digite seu melhor email"
          className={styles.inputLogin}
          onChange={(event) => setEmail(event.target.value)}
        />
        
        <input
          type="text"
          placeholder="Criar uma senha"
          className={styles.inputLogin}
          onChange={(event) => setPassword(event.target.value)}
        />
      </form>

      <div className={styles.buttons}>
        <button type="button" className={styles.button}>
          Entrar
        </button>

        <Link href="/register">
          <a type="button" className={styles.anchor}>
            Quero me cadastrar
          </a>
        </Link>
      </div>
    </div>
  );
}
