export function toggleDisplay() {
  const addForm = document.getElementById("add-form");
  addForm.classList.toggle("hide");
}

export function getTodos() {
  const todos = JSON.parse(
    localStorage.getItem("todos"));
  return todos ? todos : [];
}
