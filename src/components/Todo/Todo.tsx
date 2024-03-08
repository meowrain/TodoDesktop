import TodoForm from "./TodoForm";
import styles from './todo.module.css'
export default function Todo() {
  return (
    <div className={styles.todoContainer}>
      <h1>ToDoList</h1>
      <TodoForm />
    </div>
  );
}
