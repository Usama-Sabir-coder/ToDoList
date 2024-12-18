import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export function ToDoList() {
  let [todos, setTodos] = useState([
    { task: "Sample Task", id: uuidv4(), isDone: false },
  ]);
  let [newTodos, setNewTodos] = useState("");

  let addNewTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodos, id: uuidv4(), isDone: false }];
    });
    setNewTodos("");
  };

  let updateTodoValue = (event) => {
    setNewTodos(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
  };

  let upperCaseAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };

  let upperCaseOne = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      })
    );
  };

  let markasDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      })
    );
  };

  let deleteAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      })
    );
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
        {todos.map((todo) => (
          <li key={todo.id} className="mt-1">
            <span
              style={
                todo.isDone
                  ? { textDecorationLine: "line-through ", color: "red" }
                  : {}
              }
            >
              {todo.task}
            </span>
            &nbsp; &nbsp; &nbsp;
            <button
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
            &nbsp; &nbsp; &nbsp;
            <button
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              onClick={() => upperCaseOne(todo.id)}
            >
              UpperCase One
            </button>
            &nbsp; &nbsp; &nbsp;
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => markasDone(todo.id)}
            >
              Done
            </button>
          </li>
        ))}
      </ul>
      <br />
      <br />
      <button
        className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        onClick={upperCaseAll}
      >
        Uppercase All
      </button>
      &nbsp; &nbsp; &nbsp;
      <button
        className="px-4 py-2 bg-red-500 text-white rounded hover:red-purple-600"
        onClick={deleteAll}
      >
        Delete All
      </button>
    </div>
  );
}
