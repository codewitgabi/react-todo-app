import { useContext, useReducer } from "react";
import { TodoContext } from "../Context/TodoContext";
import { useNavigate } from "react-router-dom";
import AddForm from "../Components/AddTodoForm";
import reducer from "../reducer";


function UpdateTodo() {
  const { setTodos, todos } = useContext(TodoContext);
  const navigate = useNavigate();

  const path = window.location.href.split("/");
  const todoId = path[path.length - 1];
  const todo = todos.filter(td => td.id === todoId)[0];

  const [state, dispatch] = useReducer(reducer, {
    title: todo.title, date: todo.date, body: todo.body
  })

  const handleSubmit = e => {
    e.preventDefault();
    const updatedTodo = {
      id: todo.id,
      title: state.title,
      date: state.date,
      body: state.body
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
          value={ state.title }
          onChange={ (e) => dispatch({ type: "set-title", payload: { data: e.target.value } }) }
          required/>
        <input
          type="date"
          name="date"
          value={ state.date }
          onChange={ (e) => dispatch({ type: "set-date", payload: { data: e.target.value } }) }
          required/>
      </div>
      <textarea
        name="body"
        onChange={ (e) => dispatch({ type: "set-body", payload: { data: e.target.value } }) }
        placeholder="Description...">{ state.body }</textarea>
      <button type="submit">Save Update</button>
    </form>
    </div>
  );
}

export default UpdateTodo;
