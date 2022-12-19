import styles from "./Header.module.css";

import logoImg from "../../assets/logo.svg";
import plus from "../../assets/plus.svg";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <img src={logoImg} alt="" />
      <div className={styles.newTaskContainer}>
        <input className={styles.input} placeholder="Adicione uma nova tarefa" />
        <button className={styles.button}>Criar <img src={plus} /></button>
      </div>
    </header>
  )
}