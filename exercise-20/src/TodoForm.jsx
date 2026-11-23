import { useState, useContext } from "react";
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
    <div className="flex p-2">
      <input
        className="flex-1 mr-1 border-2 border-gray-100 p-1 rounded-sm outline-none"
        type="text"
        placeholder="Add a new todo"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button
        className="bg-purple-700 text-white py-1 px-3 border rounded text-sm"
        onClick={handleSubmit}
      >
        Add
      </button>
    </div>
  );
};
