import { tasks } from "./todoapp.js";
import { storage } from "./storage.js";
import { reassignTodos } from "./reassignTodos.js";

const activeTab = document.querySelector("#active-button");
const completedTab = document.querySelector("#completed-button");

function initializeTodos() {
  const allCheckBoxes = reassignTodos()[1];
  allCheckBoxes.forEach((checkBox) => {
    const currentTodo = checkBox.closest(".todo-ul-item");
    const currentTodoId = Number(currentTodo.id);
    const label = currentTodo.firstElementChild;
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
      const isActiveTab = activeTab.parentElement.classList.contains("active");
      const isCompletedTab =
        completedTab.parentElement.classList.contains("active");

      const shouldDisplay =
        (isActiveTab && !checkBox.checked) ||
        (isCompletedTab && checkBox.checked) ||
        (!isActiveTab && !isCompletedTab);
      label.parentElement.style.display = shouldDisplay ? "block" : "none";

      const currentTodoId = Number(checkBox.closest(".todo-ul-item").id);
      label.style.textDecoration = checkBox.checked ? "line-through" : "none";

      tasks.forEach((task) => {
        if (task.id === currentTodoId) {
          task.completed = checkBox.checked;
        }
      });

      storage.set("tasks", tasks);
    });
  });
}

export { initializeTodos };
