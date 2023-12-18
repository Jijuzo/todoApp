import { Todo } from "./types.js";

const todosUl = document.querySelector(".todo-ul") as HTMLElement;

function addTodo(todo: Todo) {
  const newTodo = document.createElement("li");
  newTodo.className = "todo-ul-item";
  newTodo.id = todo.id;
  newTodo.innerHTML = `
            <label class="task-label">
            <input type="checkbox" class="check"> ${todo.name}
            </label>
            <button class="completed-trash">
            <i class="fa-solid fa-trash-can"></i>
            </button>
    `;
  todosUl.appendChild(newTodo);
}

export { addTodo, todosUl };
