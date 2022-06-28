import { Check, Trash, TrashSimple } from "phosphor-react";
import { useState } from "react";
import { ITask } from "../App";

import styles from "./Tasks.module.css";

interface TaskProps {
  tasks: ITask[];
  onDeleteTask: (id: string) => void;
  onStatusTask: (id: string) => void;
}

export function Tasks({ tasks, onDeleteTask, onStatusTask }: TaskProps) {
  const [checked, setChecked] = useState(false);

  function handleDeleteTask(id: string) {
    onDeleteTask(id);
  }

  function handleDoneTask(id: string) {
    onStatusTask(id);
    setChecked(!checked);
  }

  return (
    <>
      {tasks.map((task) => (
        <div key={task.id} className={styles.content}>
          <div className={styles.tasks}>
            <label>
              <input
                type="checkbox"
                value="task"
                name="task"
                checked={task.isDone}
                onChange={() => handleDoneTask(task.id)}
              />
              <span></span>
            </label>
            <span
              onClick={() => handleDoneTask(task.id)}
              className={task.isDone ? styles.taskDone : ""}
            >
              {task.title}
            </span>
            <Trash onClick={() => handleDeleteTask(task.id)} />
          </div>
        </div>
      ))}
    </>
  );
}
