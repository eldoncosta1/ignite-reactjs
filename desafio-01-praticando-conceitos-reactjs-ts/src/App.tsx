import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { PlusCircle } from "phosphor-react";

import { Header } from "./components/Header";

import styles from "./App.module.css";

import "./global.css";
import { EmptyTasks } from "./components/EmptyTasks";
import { Tasks } from "./components/Tasks";
import { InfoTasks } from "./components/InfoTasks";

export interface ITask {
  id: string;
  title: string;
  isDone: boolean;
}

const taskList: ITask[] = [
  {
    id: uuid(),
    title:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    isDone: false,
  },
  {
    id: uuid(),
    title:
      "É claro que o consenso sobre a necessidade de qualificação é uma das consequências dos níveis de motivação",
    isDone: false,
  },
  {
    id: uuid(),
    title:
      "Percebemos, cada vez mais, que o início da atividade geral de formação de atitudes apresenta tendências",
    isDone: false,
  },
  {
    id: uuid(),
    title: "Nunca é demais lembrar o peso e o significado destes problema",
    isDone: false,
  },
  {
    id: uuid(),
    title:
      "É importante questionar o quanto a consulta aos diversos militantes, ",
    isDone: false,
  },
];

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [newTask, setNewTask] = useState("");
  const [tasksDoned, setTasksDoned] = useState(0);

  useEffect(() => {
    const numberTaskDoned = tasks.reduce((sumTotal, task) => {
      if (task.isDone) return (sumTotal += 1);
      return sumTotal;
    }, 0);

    setTasksDoned(numberTaskDoned);
  }, [tasks]);

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function handleAddNewTask(event: FormEvent) {
    event.preventDefault();

    const addNewTask = {
      id: uuid(),
      title: newTask,
      isDone: false,
    };

    setTasks([...tasks, addNewTask]);
    setNewTask("");
  }

  function deleteTask(id: string) {
    const tasksWithoutDeletedOne = tasks.filter((task) => task.id !== id);

    setTasks(tasksWithoutDeletedOne);
  }

  function changeStatusTask(id: string) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) task.isDone = !task.isDone;

        return task;
      })
    );
  }

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <form onSubmit={handleAddNewTask} className={styles.form}>
          <input
            type="text"
            name="task"
            placeholder="Adicione uma nova tarefa"
            value={newTask}
            onChange={handleNewTaskChange}
          />
          <button type="submit">
            <span>Criar</span> <PlusCircle size={16} />
          </button>
        </form>

        <InfoTasks tasksCreated={tasks.length} tasksDoned={tasksDoned} />

        {tasks.length == 0 ? (
          <EmptyTasks />
        ) : (
          <Tasks
            onStatusTask={changeStatusTask}
            onDeleteTask={deleteTask}
            tasks={tasks}
          />
        )}
      </div>
    </>
  );
}

export default App;
