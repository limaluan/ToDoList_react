import { createContext, ReactNode, useEffect, useState } from "react";

interface ITaskProviderProps {
  children: ReactNode;
}

interface ITask {
  id: number;
  description: string;
  isComplete: boolean;
}

interface ITaskContextData {
  tasks: ITask[];
  tasksComplete: number;
  addTask: (description: string) => void;
  completeTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

export const TaskContext = createContext({} as ITaskContextData);

export function TasksProvider({ children }: ITaskProviderProps) {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [tasksComplete, setTasksComplete] = useState(0);

  function addTask(description: string) {
    setTasks([...tasks, {
      description,
      isComplete: false,
      id: Math.ceil(Math.random() * 1000)
    }]);
    console.log(tasks)
  }

  function completeTask(id: number) {
    const taskComplete = tasks.findIndex((task => task.id === id))
    const newTasks = [...tasks];
    newTasks[taskComplete] = { ...newTasks[taskComplete], isComplete: true };
    setTasks(newTasks);
    setTasksComplete(tasksComplete + 1);
    console.log(tasks)
  }

  function deleteTask(id: number) {
    const newTasks = tasks.filter((task) => task.id !== id);
    const taskDeleted = tasks.find((task) => task.id === id);
    setTasks(newTasks);
    taskDeleted?.isComplete && setTasksComplete(tasksComplete - 1);
    console.log(tasks)
  }

  return (
    <TaskContext.Provider value={{ tasks, tasksComplete, addTask, completeTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  )
}
