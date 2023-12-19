import { Todo } from "./types.js";
import { todos } from "./storage-todos.js";
import { storage } from "./storage.js";

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

  const trashCan = newTodo.querySelector(".completed-trash");
  setTodoDeletionListener(trashCan as Element);
}

const setTodoDeletionListener = (trashCan: Element) => {
  trashCan.addEventListener("click", () => {
    const currentTodo = trashCan.closest(".todo-ul-item");
    if (currentTodo) {
      todosUl.removeChild(currentTodo);

      const todoIndex = todos.findIndex((todo) => todo.id === currentTodo.id);
      todos.splice(todoIndex, 1);
      storage.set<Todo[]>("todos", todos);
    }
  });
};

export { addTodo, todosUl };
