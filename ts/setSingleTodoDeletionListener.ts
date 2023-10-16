import { storage } from "./storage.js";
import { todos, tasks } from "./todoapp.js";
import { TypeTodo } from "./demoTodo.js";

function setSingleTodoDeletionListener() {
  todos.addEventListener("click", (e) => {
    const targetTodo = e.target as HTMLElement;
    if (targetTodo.classList.contains("fa-trash-can")) {
      const currentTodo = targetTodo.parentElement!.parentElement;
      if (currentTodo) {
        todos.removeChild(currentTodo);

        if (isTypeTodo(tasks)) {
          const todoIndex = tasks.findIndex(
            (task) => task.id === Number(currentTodo.id)
          );

          tasks.splice(todoIndex, 1);
          storage.set("tasks", tasks);
        }
      }
    }
  });
}

function isTypeTodo(value: string | TypeTodo): value is TypeTodo {
  return value !== undefined;
}

export { setSingleTodoDeletionListener, isTypeTodo };
