

function Todo({ todo }) {
  return (
    <div class="todo">
      <legend class="title">{ todo.title }</legend>
      <small class="date">{ todo.date }</small>
      <p class="body">{ todo.body }</p>
    </div>
  );
}

export default Todo;
