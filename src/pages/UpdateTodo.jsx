import { useContext, useState } from "react";
import { TodoContext } from "../Context/TodoContext";
import { useNavigate } from "react-router-dom";
import AddForm from "../Components/AddTodoForm";


function UpdateTodo() {
  const { setTodos, todos } = useContext(TodoContext);
  const navigate = useNavigate();

  const path = window.location.href.split("/");
  const todoId = path[path.length - 1];
  const todo = todos.filter(td => td.id === todoId)[0];

  const [title, setTitle] = useState(todo.title);
  const [date, setDate] = useState(todo.date);
  const [body, setBody] = useState(todo.body);

  const updateTitle = e => {
    setTitle(e.target.value);
  };

  const updateDate = e => {
    setDate(e.target.value);
  };

  const updateBody = e => {
    setBody(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const updatedTodo = {
      id: todo.id,
      title: title,
      date: date,
      body: body
    };
    const newTodos = todos.filter(td => td !== todo);

    // update local storage
    localStorage.setItem("todos",
      JSON.stringify([updatedTodo, ...newTodos]));
    setTodos([updatedTodo, ...newTodos]);

    navigate("/");
  };

  return (
    <div className="container">
    <AddForm />

    <form
      id="update-form"
      onSubmit={ handleSubmit }
    >
      <div class="col">
        <input
          type="text"
          name="title"
          placeholder="Title..."
          value={ title }
          onChange={ updateTitle }
          required/>
        <input
          type="date"
          name="date"
          value={ date }
          onChange={ updateDate }
          required/>
      </div>
      <textarea
        name="body"
        onChange={ updateBody }
        placeholder="Description...">{ body }</textarea>
      <button type="submit">Save Update</button>
    </form>
    </div>
  );
}

export default UpdateTodo;
