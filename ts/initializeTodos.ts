import { todoModel } from "./todoModel.js";

function initializeTodos() {
  const allCheckBoxes = document.querySelectorAll(
    ".check"
  ) as NodeListOf<HTMLInputElement>;

  allCheckBoxes.forEach((checkBox) => {
    const currentTodo = checkBox.closest(".todo-ul-item") as HTMLElement;
    const currentTodoId = currentTodo.id;
    const matchingTodo = todoModel.items.find(
      (todo) => todo.id === currentTodoId
    );

    if (matchingTodo) {
      checkBox.checked = matchingTodo.completed;
      currentTodo.classList.toggle("completed", matchingTodo.completed);
    }
  });
}

export { initializeTodos };
