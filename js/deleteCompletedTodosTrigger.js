import { tasks, todos } from "./todoapp.js";
import { todosReassignment } from "./todosReassignment.js";
import { storage } from "./storage.js";

export const deleteCompletedButton =
  document.querySelector(".delete-completed");

export function deleteCompletedTodosTrigger() {
  deleteCompletedButton.addEventListener("click", () => {
    const allTodos = todosReassignment()[0];
    allTodos.forEach((todo) => {
      const currentTodoId = Number(todo.id);
      tasks.forEach((task) => {
        if (task.id === currentTodoId && task.completed) {
          todos.removeChild(todo);
        }
      });
    });

    for (let i = tasks.length - 1; i >= 0; i--) {
      if (tasks[i].completed) {
        tasks.splice(i, 1);
      }
    }
    // tasks = tasks.filter((task) => task.completed === false);
    storage.set("tasks", tasks);
  });
}
