import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Homepage from "./pages/Home";
import UpdateTodoPage from "./pages/UpdateTodo";
import { TodoContext } from "./Context/TodoContext";
import { getTodos } from "./main";


function TodoApp() {
  const [todos, setTodos] = useState(getTodos());

  return (
    <>
      <TodoContext.Provider value={{ todos, setTodos }}>
        <Nav />
        <Routes>
          <Route path="/" element={ <Homepage /> } />
          <Route path="/update/:id" element={ <UpdateTodoPage /> } />
        </Routes>
      </TodoContext.Provider>
    </>
  );
}

export default TodoApp;
