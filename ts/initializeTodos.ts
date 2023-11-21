import { tasks } from "./todoapp.js";
import { storage } from "./storage.js";
import { reassignTodos } from "./reassignTodos.js";

const activeTab = document.querySelector("#active-button") as HTMLElement;
const completedTab = document.querySelector("#completed-button") as HTMLElement;

function initializeTodos() {
  const allCheckBoxes = reassignTodos()[1] as NodeListOf<HTMLInputElement>;
  allCheckBoxes.forEach((checkBox) => {
    const currentTodo = checkBox.closest(".todo-ul-item") as HTMLElement;
    const currentTodoId = currentTodo.id;
    const label = currentTodo.firstElementChild as HTMLElement;
    tasks.forEach((task) => {
      if (task.id !== currentTodoId) return;

      if (task.completed) {
        checkBox.checked = true;
        label.style.textDecoration = "line-through";
      } else {
        checkBox.checked = false;
      }
    });

    checkBox.addEventListener("click", () => {
      const isActiveTab = (
        activeTab.parentElement as HTMLElement
      ).classList.contains("active");
      const isCompletedTab = (
        completedTab.parentElement as HTMLElement
      ).classList.contains("active");

      const shouldDisplay =
        (isActiveTab && !checkBox.checked) ||
        (isCompletedTab && checkBox.checked) ||
        (!isActiveTab && !isCompletedTab);
      label.parentElement !== null
        ? (label.parentElement.style.display = shouldDisplay ? "block" : "none")
        : null;

      const currentTodoId = currentTodo.id;
      label.style.textDecoration = checkBox.checked ? "line-through" : "none";

      tasks.forEach((task) => {
        if (task.id === currentTodoId) {
          task.completed = checkBox.checked;
        }
      });

      storage.set("tasks", JSON.stringify(tasks));
    });
  });
}

export { initializeTodos };
