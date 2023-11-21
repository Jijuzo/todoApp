import { todos } from "./todoapp.js";

function addTodo(todo: { name: string; id: number; completed: boolean }) {
  const todosDiv = document.querySelector("#tab1");
  const newTodo = document.createElement("li");
  newTodo.className = "todo-ul-item";
  newTodo.id = todo.id.toString();
  newTodo.innerHTML = `
            <label class="task-label">
            <input type="checkbox" class="check"> ${todo.name}
            </label>
            <button class="completed-trash">
            <i class="fa-solid fa-trash-can"></i>
            </button>
    `;
  todos.appendChild(newTodo);
  todosDiv?.appendChild(todos);
}

export { addTodo };