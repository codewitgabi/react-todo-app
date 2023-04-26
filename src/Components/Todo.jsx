import { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";


function Todo({ todo }) {
  const { todos, setTodos } = useContext(TodoContext);

  const handleDelete = () => {
    const newTodos = todos.filter(td => td.id !== todo.id);
    // resave todo to LS
    localStorage.setItem("todos",
      JSON.stringify(newTodos));

    // set new state for todos
    setTodos(newTodos);
  };

  return (
    <div class="todo">
      <div>
        <legend class="title">{ todo.title }</legend>
        <small class="date">{ todo.date }</small>
        <p class="body">{ todo.body }</p>
      </div>
      <div>
        <button className="upd-btn">Update</button>
        <button
          className="del-btn"
          onClick={ handleDelete }
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
