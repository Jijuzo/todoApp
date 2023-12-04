import { storage } from "./storage.js";
import { todosUl, todos } from "./todoapp.js";
import { Todo } from "./types.js";

function setSingleTodoDeletionListener() {
  todosUl.addEventListener("click", (e) => {
    const targetTodo = e.target as HTMLElement;
    if (targetTodo.classList.contains("fa-trash-can")) {
      const currentTodo = (targetTodo.parentElement as HTMLElement)
        .parentElement;
      if (currentTodo) {
        todosUl.removeChild(currentTodo);

        const todoIndex = todos.findIndex((todo) => todo.id === currentTodo.id);

        todos.splice(todoIndex, 1);
        storage.set<Todo[]>("todos", todos);
      }
    }
  });
}

export { setSingleTodoDeletionListener };
