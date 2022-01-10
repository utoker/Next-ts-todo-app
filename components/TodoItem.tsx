import styles from "./TodoItem.module.css";

const TodoItem: React.FC<{ todoId: string,text: string; deleteTodo: (todoId: string) => void }> = ({
  text,
  deleteTodo,
  todoId,
  
}) => {
  const onDeleteTodo = () => {
    deleteTodo(todoId);
  };

  return (
    <li onClick={onDeleteTodo} className={styles.item}>
      {text}
    </li>
  );
};

export default TodoItem;
