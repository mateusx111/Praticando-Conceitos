import todologo from "../../assets/todologo.svg"

import styles from "./header.module.css"

export function Header () {
  return (
    <header className={styles.header}>
      <img src={todologo} />

      <form className={styles.newTaskForm}>
          <input placeholder="Adicione uma nova tarefa" />
          <button>Criar</button>
      </form>
    </header>
  )
}