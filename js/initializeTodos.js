import { tasks } from "./todoapp.js";
import { storage } from "./storage.js";
import { todosReassignment } from "./todosReassignment.js";

function initializeTodos() {
  for (let checkBox of todosReassignment()[1]) {
    const currentTodo = checkBox.parentElement.parentElement;
    const currentTodoId = Number(currentTodo.id);
    const label = currentTodo.firstElementChild;
    for (let task of tasks) {
      if (task.id === currentTodoId) {
        if (task.completed) {
          checkBox.checked = true;
          label.style.textDecoration = "line-through";
        } else {
          checkBox.checked = false;
        }
      }
    }
    // if (currentTodo.dataset.completed === "true") {
    //   checkBox.checked = true;
    //   label.style.textDecoration = "line-through";
    // } else {
    //   checkBox.checked = false;
    // }

    checkBox.addEventListener("click", (e) => {
      const currentTodoId = Number(checkBox.parentElement.parentElement.id);
      checkBox.checked
        ? (label.style.textDecoration = "line-through")
        : (label.style.textDecoration = "none");

      for (let task of tasks) {
        if (task.id === currentTodoId) {
          task.completed = checkBox.checked;
        }
      }
      storage.set("tasks", tasks);
    });
  }
}

export { initializeTodos };
