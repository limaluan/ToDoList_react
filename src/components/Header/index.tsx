import styles from "./Header.module.css";

import logoImg from "../../assets/logo.svg";
import plus from "../../assets/plus.svg";
import { FormEvent, useContext, useState } from "react";
import { TaskContext } from "../../contexts/TasksContext";

export function Header() {
  const [description, setDescription] = useState("");
  const { addTask } = useContext(TaskContext);

  function handleAddTask(e: FormEvent) {
    e.preventDefault();
    addTask(description);
    setDescription("");
  }

  return (
    <header className={styles.headerContainer}>
      <img src={logoImg} alt="" />
      <form
        className={styles.newTaskContainer}
        onSubmit={(e) => handleAddTask(e)}
      >
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={styles.input}
          placeholder="Adicione uma nova tarefa"
        />
        <button
          className={styles.button}>Criar <img src={plus} />
        </button>
      </form>
    </header>
  )
}