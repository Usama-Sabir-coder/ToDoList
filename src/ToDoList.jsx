import { useState } from "react";

export function ToDoList() {
  let [todos, setTodos] = useState(["Sample Task"]);
  let [newTodos, setNewTodos] = useState("");

  let addNewTask = () => {
    setTodos([...todos, newTodos]);
    setNewTodos("");
  };

  let updateTodoValue = (event) => {
    setNewTodos(event.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-5">
      <p className="text-2xl font-bold">ToDoList</p>
      <br />
      <input
        className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Add a task"
        type="text"
        value={newTodos}
        onChange={updateTodoValue}
      />
      <br />
      <br />
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={addNewTask}
      >
        Add Task
      </button>
      <br />
      <br />
      <hr className="border-gray-700" />
      <h4 className="text-xl font-semibold mt-4">Tasks To Do</h4>
      <ul className="list-disc list-inside mt-2">
        {todos.map((todo, index) => (
          <li key={index} className="mt-1">
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}
