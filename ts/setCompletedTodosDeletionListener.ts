import { tasks, todos } from "./todoapp.js";
import { reassignTodos } from "./reassignTodos.js";
import { storage } from "./storage.js";
import { isTypeTodo } from "./setSingleTodoDeletionListener.js";

export const deleteCompletedButton = document.querySelector(
  ".delete-completed"
) as HTMLElement;

export function setCompletedTodosDeletionListener() {
  deleteCompletedButton.addEventListener("click", () => {
    const allTodos = reassignTodos()[0];
    allTodos.forEach((todo) => {
      const currentTodoId = Number(todo.id);

      if (isTypeTodo(tasks)) {
        tasks.forEach((task) => {
          if (task.id === currentTodoId && task.completed) {
            todos.removeChild(todo);
          }
        });
      }
    });

    if (isTypeTodo(tasks)) {
      for (let i = tasks.length - 1; i >= 0; i--) {
        if (tasks[i].completed) {
          tasks.splice(i, 1);
        }
      }
    }
    storage.set("tasks", tasks);
  });
}
