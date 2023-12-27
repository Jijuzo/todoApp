import { Todo } from "./types.js";
import { todoModel } from "./todoModel.js";

const todosUl = document.querySelector(".todo-ul") as HTMLElement;

function addTodo(todo: Todo) {
  const newTodo = document.createElement("li");
  newTodo.className = "todo-ul-item";
  newTodo.id = todo.id;
  newTodo.innerHTML = `
            <label class="todo-label">
            <input type="checkbox" class="check"> ${todo.name}
            </label>
            <button class="completed-trash">
            <i class="fa-solid fa-trash-can"></i>
            </button>
    `;
  todosUl.appendChild(newTodo);

  const trashCan = newTodo.querySelector(".completed-trash") as Element;
  const checkBox = newTodo.querySelector(".check") as HTMLInputElement;
  setTodoDeletionListener(trashCan, newTodo);
  setTodoDisplayListener(checkBox, newTodo);
}

const setTodoDeletionListener = (
  trashCan: Element,
  currentTodo: HTMLLIElement
) => {
  trashCan.addEventListener("click", () => {
    if (currentTodo) {
      todosUl.removeChild(currentTodo);

      todoModel.items = todoModel.items.filter(
        (todo) => todo.id !== currentTodo.id
      );
    }
  });
};

const setTodoDisplayListener = (
  checkBox: HTMLInputElement,
  currentTodo: HTMLLIElement
) => {
  checkBox.addEventListener("click", () => {
    const currentTodoId = currentTodo.id;

    currentTodo.classList.toggle("completed");
    todoModel.items = todoModel.items.map((todo) =>
      todo.id === currentTodoId
        ? { ...todo, completed: checkBox.checked }
        : todo
    );
  });
};

export { addTodo, todosUl };
