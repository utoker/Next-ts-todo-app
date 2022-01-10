import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import styles from "./Todos.module.css";
const Todos: React.FC<{ items: Todo[]; deleteTodo: (todoId: string) => void }> = ({
  items,
  deleteTodo,
}) => {
  return (
    <ul className={styles.todos}>
      {items.map((item) => (
        <TodoItem key={item.id} text={item.text} deleteTodo={deleteTodo} todoId={item.id} />
      ))}
    </ul>
  );
};

export default Todos;
