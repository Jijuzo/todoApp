import { todos } from "./storage-todos.js";
import { storage } from "./storage.js";
import { Todo } from "./types.js";

const activeTab = document.querySelector("#active-button") as HTMLElement;
const completedTab = document.querySelector("#completed-button") as HTMLElement;

function initializeTodos() {
  const allCheckBoxes = getCheckBoxes();
  allCheckBoxes.forEach((checkBox) => {
    const currentTodo = checkBox.closest(".todo-ul-item") as HTMLElement;
    const currentTodoId = currentTodo.id;
    const label = currentTodo.firstElementChild as HTMLElement;
    todos.forEach((todo) => {
      if (todo.id !== currentTodoId) return;
      if (todo.completed) {
        checkBox.checked = true;
        label.style.textDecoration = "line-through";
      } else {
        checkBox.checked = false;
      }
    });

    checkBox.addEventListener("click", () => {
      const isActiveTab = activeTab.classList.contains("active");
      const isCompletedTab = completedTab.classList.contains("active");
      const shouldDisplay =
        (isActiveTab && !checkBox.checked) ||
        (isCompletedTab && checkBox.checked) ||
        (!isActiveTab && !isCompletedTab);
      label.parentElement !== null
        ? (label.parentElement.style.display = shouldDisplay ? "block" : "none")
        : null;

      const currentTodoId = currentTodo.id;
      label.style.textDecoration = checkBox.checked ? "line-through" : "none";

      todos.forEach((task) => {
        if (task.id === currentTodoId) {
          task.completed = checkBox.checked;
        }
      });

      storage.set<Todo[]>("todos", todos);
    });
  });
}

const getCheckBoxes = () => {
  const checkBoxes = document.querySelectorAll(
    ".check"
  ) as NodeListOf<HTMLInputElement>;

  return [...checkBoxes];
};

export { initializeTodos };
