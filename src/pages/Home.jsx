import AddForm from "../Components/AddTodoForm";
import Todo from "../Components/Todo";
import { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";


function Homepage() {
  const { todos } = useContext(TodoContext);

  return (
    <div className="container">
      <AddForm />
      {
        todos.map(todo => {
          return <Todo key={ todo.id } todo={ todo } />
        })
      }
    </div>
  );
}


export default Homepage;
