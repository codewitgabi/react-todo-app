import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Homepage from "./pages/Home";
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
        </Routes>
      </TodoContext.Provider>
    </>
  );
}

export default TodoApp;
