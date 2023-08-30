import { tasks } from "./todoapp.js";
import { storage } from "./storage.js";
import { todosReassignment } from "./todosReassignment.js";

function initializeTodos() {
  const allCheckBoxes = todosReassignment()[1];
  allCheckBoxes.forEach((checkBox) => {
    const currentTodo = checkBox.closest(".todo-ul-item");
    const currentTodoId = Number(currentTodo.id);
    const label = currentTodo.firstElementChild;
    tasks.forEach((task) => {
      if (task.id === currentTodoId) {
        if (task.completed) {
          checkBox.checked = true;
          label.style.textDecoration = "line-through";
        } else {
          checkBox.checked = false;
        }
      }
    });

    checkBox.addEventListener("click", () => {
      const currentTodoId = Number(checkBox.closest(".todo-ul-item").id);
      checkBox.checked
        ? (label.style.textDecoration = "line-through")
        : (label.style.textDecoration = "none");

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
