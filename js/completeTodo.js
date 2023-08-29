import { allCheckBoxes, tasks } from "./todoapp.js";
import storage from "./storage.js";

function completeTodo() {
  for (let checkbox of allCheckBoxes) {
    const currentTodo = checkbox.parentElement;
    const label = currentTodo.children[1];
    if (currentTodo.dataset.completed === "true") {
      checkbox.checked = true;
      label.style.textDecoration = "line-through";
    } else {
      checkbox.checked = false;
    }

    checkbox.addEventListener("click", () => {
      const currentTodoId = Number(currentTodo.firstElementChild.id);
      currentTodo.dataset.completed = checkbox.checked;
      checkbox.checked
        ? (label.style.textDecoration = "line-through")
        : (label.style.textDecoration = "none");

      for (let task of tasks) {
        if (task.id === currentTodoId) {
          task.completed = checkbox.checked;
        }
      }
      storage.set("tasks", tasks);
    });
  }
}

export default completeTodo;
