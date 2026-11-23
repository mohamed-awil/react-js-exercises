import { useState, useContext } from "react";
import styles from "./TodoForm.module.css";
import TodoContext from "./TodoContext";

export const TodoForm = () => {
  const [text, setText] = useState();

  const { dispatch } = useContext(TodoContext);
  function handleSubmit() {
    if (text.trim() === "") {
      return;
    }
    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
    };

    dispatch({ type: "ADD", payload: newTodo });
    setText("");
  }

  return (
    <div className={styles.formContainer}>
      <input
        className={styles.FormInput}
        type="text"
        placeholder="Add a new todo"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button className={styles.formBtn} onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
};
