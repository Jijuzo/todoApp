import { Todo } from "./types.js";
import { todoModel } from "./todoModel.js";

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

      todoModel.items = todoModel.items.filter(
        (todo) => todo.id !== currentTodo.id
      );
    }
  });
};

export { addTodo, todosUl };
