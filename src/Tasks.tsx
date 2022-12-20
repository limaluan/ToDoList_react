import styles from "./Tasks.module.css";

import clipboardIcon from "./assets/clipboard.svg";

import { useContext } from "react";
import { TaskContext } from "./contexts/TasksContext";
import { TaskItem } from "./components/TaskItem";

function Tasks() {
  const { tasks, tasksComplete } = useContext(TaskContext);

  return (
    <main className={styles.mainContainer}>
      <div className={styles.taskStatusContainer}>
        <h3>Tarefas Criadas <span>{tasks.length}</span></h3>
        <h3>Concluídas <span>{tasks.length === 0 ? "0" : `${tasksComplete} de ${tasks.length}`}</span></h3>
      </div>

      {tasks.length === 0
        ? (
          <div className={styles.tasksList + " " + styles.empty}>
            <img src={clipboardIcon} />
            <p><b>Você ainda não tem tarefas cadastradas</b><br />
              Crie tarefas e organize seus itens a fazer
            </p>
          </div>
        )
        : (
          <div className={styles.tasksList}>
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                description={task.description}
                isComplete={task.isComplete}
                id={task.id}
              />
            ))}
          </div>
        )
      }
    </main>
  );
}

export default Tasks;
