import { modifyStorageTodos, todos, todosUl } from "./todoapp.js";
import { storage } from "./storage.js";
import { Todo } from "./types.js";

const deleteCompletedButton = document.querySelector(
  ".delete-completed"
) as HTMLElement;

function setCompletedTodosDeletionListener() {
  deleteCompletedButton.addEventListener("click", () => {
    const activeTodos: Todo[] = [];
    todos.forEach((todo) => {
      const todoUI = document.getElementById(`${todo.id}`) as HTMLElement;
      todo.completed ? todosUl.removeChild(todoUI) : activeTodos.push(todo);
    });
    modifyStorageTodos(activeTodos);
    storage.set<Todo[]>("todos", todos);
  });
}

export { deleteCompletedButton, setCompletedTodosDeletionListener };
