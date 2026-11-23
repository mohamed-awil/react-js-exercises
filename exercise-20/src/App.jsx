import { useReducer } from "react";
import { reducer, initialValue } from "./reducer";
import TodoContext from "./TodoContext";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

function App() {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <div className="w-1/2 mx-auto bg-white my-6 text-center rounded-md p-4 ">
      <TodoContext.Provider value={{ state, dispatch }}>
        <h1 className="font-bold text-3xl pb-4">My Todo List</h1>
        <TodoForm />
        <TodoList />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
