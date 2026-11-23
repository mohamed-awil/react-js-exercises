import { useContext } from "react";
import TodoContext from "./TodoContext";
import styles from "./TodoList.module.css";

export const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);
  console.log(state);

  return (
    <div>
      <ul className={styles.list}>
        {state.map((todo) => (
          <li className={styles.listItem} key={todo.id}>
            <input
              type="checkbox"
              onClick={() => dispatch({ type: "TOGGLE", payload: todo.id })}
            />
            <span className={styles.task}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                color: todo.completed ? "#5d5e5f" : "#414344",
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => dispatch({ type: "DELETE", payload: todo.id })}
              className={styles.deleteButton}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
