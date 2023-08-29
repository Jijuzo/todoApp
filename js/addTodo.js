import { todos } from "./todoapp.js";

export function addTodo(todo) {
  const todosDiv = document.querySelector("#tab1");
  const newTodo = document.createElement("li");
  newTodo.className = "todo-ul-item";
  newTodo.setAttribute("data-completed", todo.completed);
  newTodo.innerHTML = `
            <input id="${todo.id}" type="checkbox" class="check">
            <label class="task-label" for="${todo.id}">${todo.name}</label>
            <button class="completed-trash">
            <i class="fa-solid fa-trash-can"></i>
            </button>
    `;
  todos.appendChild(newTodo);
  todosDiv.appendChild(todos);
}

export default addTodo;
