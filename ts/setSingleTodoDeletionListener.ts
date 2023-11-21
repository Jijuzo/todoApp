import { storage } from "./storage.js";
import { todos, tasks } from "./todoapp.js";
import { Todo } from "./types.js";

function setSingleTodoDeletionListener() {
  todos.addEventListener("click", (e) => {
    const targetTodo = e.target as HTMLElement;
    if (targetTodo.classList.contains("fa-trash-can")) {
      const currentTodo = (targetTodo.parentElement as HTMLElement)
        .parentElement;
      if (currentTodo) {
        todos.removeChild(currentTodo);

        const todoIndex = tasks.findIndex((task) => task.id === currentTodo.id);

        tasks.splice(todoIndex, 1);
        storage.set<Todo[]>("tasks", tasks);
      }
    }
  });
}

export { setSingleTodoDeletionListener };
