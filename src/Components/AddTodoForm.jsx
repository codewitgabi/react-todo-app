import { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";


function AddTodoForm() {
  const { setTodos, todos } = useContext(TodoContext);

  const handleSubmit = e => {
    e.preventDefault();

    const newTodo = {
      id: new Date(),
      title: e.target.title.value,
      date: e.target.date.value,
      body: e.target.body.value
    };

    const newTodos = [...todos, newTodo];

    // set state of new todos
    setTodos(newTodos);

    // add todo to local storage
    localStorage.setItem("todos",
      JSON.stringify(newTodos));

    e.target.reset();
  };

  return (
    <form
      onSubmit={ handleSubmit }
      id="add-form"
      className="hide"
    >
      <div class="col">
        <input
          type="text"
          name="title"
          placeholder="Title..."
          required/>
        <input
          type="date"
          name="date"
          required/>
      </div>
      <textarea
        name="body"
        placeholder="Description..."></textarea>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTodoForm;
