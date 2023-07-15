import Header from "./components/Header";
import TaskContainer from "./components/TaskContainer";
import AddTask from "./components/AddTask";

import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const initialTodos =
    localStorage.getItem("todos") !== null
      ? JSON.parse(localStorage.getItem("todos"))
      : [];
  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodos = (newTodo) => {
    let newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  const handleUpdate = (updatedTodo) => {
    let newTodos = todos.filter((item) => item.id !== updatedTodo.id);
    newTodos = [...newTodos, updatedTodo];
    setTodos(newTodos);
  };

  const handleDelete = (deleteItem) => {
    let newTodos = todos.filter((item) => item.id !== deleteItem);
    setTodos(newTodos);
  };

  const handleClearTodos = () => {
    setTodos([]);
  };

  console.log(todos);

  return (
    <>
      <div className="wrapper">
        <Header todos={todos} handleClearTodos={handleClearTodos} />
        <TaskContainer
          todos={todos}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
        />
        <AddTask todos={todos} handleAddTodos={handleAddTodos} />
      </div>
    </>
  );
}

export default App;
