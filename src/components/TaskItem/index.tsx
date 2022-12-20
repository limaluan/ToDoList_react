import styles from "./TaskItem.module.css";

import trashIcon from "../../assets/trash.svg";
import circleIcon from "../../assets/circle.svg";
import checkedIcon from "../../assets/checked.svg";
import { ITask, TaskContext } from "../../contexts/TasksContext";
import { useContext } from "react";

export function TaskItem({ description, isComplete, id }: ITask) {
  const { completeTask, deleteTask } = useContext(TaskContext);

  return (
    <div className={styles.taskItem}>
      {isComplete
        ? <img src={checkedIcon} />
        : <img src={circleIcon} onClick={() => completeTask(id)} />}
      <p className={isComplete ? styles.complete : ""}>{description}</p>
      <img src={trashIcon} onClick={() => deleteTask(id)} />
    </div>
  );
}
