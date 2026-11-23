import { useContext } from "react";
import TodoContext from "./TodoContext";

export const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);
  console.log(state);

  return (
    <div>
      <ul className="p-2">
        {state.map((todo) => (
          <li
            className="flex px-2 py-1 bg-gray-100 mb-2 rounded-sm"
            key={todo.id}
          >
            <input
              type="checkbox"
              onClick={() => dispatch({ type: "TOGGLE", payload: todo.id })}
            />
            <span
              className={`flex-1 text-left ml-1 font-normal ${
                todo.completed ? "text-gray-400" : "text-black"
              } ${todo.completed ? "line-through" : "none"}`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => dispatch({ type: "DELETE", payload: todo.id })}
              className="text-red-600 font-sm"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};


