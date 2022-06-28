import styles from "./EmptyTasks.module.css";

import clipboardImg from "../assets/clipboard.svg";

export function EmptyTasks() {
  return (
    <div className={styles.content}>
      <div className={styles.infoTaskEmpty}>
        <img src={clipboardImg} alt="Clipboar Empty tasks" />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
