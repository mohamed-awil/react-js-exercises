import styles from "./App.module.css";
import {useReducer} from "react";
import { reducer, initialValue } from "./reducer";
import TodoContext from "./TodoContext";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

function App() {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <div className={styles.todoContainer}>
    <TodoContext.Provider value={{ state, dispatch }}>
      <h1 className={styles.todoTitle}>My Todo List</h1>
      <TodoForm />
      <TodoList/>
    </TodoContext.Provider>
    </div>
  );
}

export default App;
