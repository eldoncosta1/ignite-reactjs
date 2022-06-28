import styles from "./InfoTasks.module.css";

interface InfoTasksProps {
  tasksCreated: number;
  tasksDoned: number;
}

export function InfoTasks({
  tasksCreated = 0,
  tasksDoned = 0,
}: InfoTasksProps) {
  return (
    <div className={styles.contentInfoTasks}>
      <div className={styles.infoTasks}>
        <div>
          <strong className={styles.titleTaskCreated}>Tarefas criadas</strong>
          <span className={styles.qtdTaskCreated}>{tasksCreated}</span>
        </div>

        <div>
          <strong className={styles.titleTaskDone}>Concluidas</strong>
          <span className={styles.qtdTaskDone}>
            {tasksCreated == 0 ? 0 : tasksDoned + " de " + tasksCreated}
          </span>
        </div>
      </div>
    </div>
  );
}
