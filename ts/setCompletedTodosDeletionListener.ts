import { todos, todosUl } from "./todoapp.js";
import { storage } from "./storage.js";
import { Todo } from "./types.js";

export const deleteCompletedButton = document.querySelector(
  ".delete-completed"
) as HTMLElement;

export function setCompletedTodosDeletionListener() {
  deleteCompletedButton.addEventListener("click", () => {
    const allTodos = getTodoUIs();
    allTodos.forEach((todoUI) => {
      const currentTodoId = todoUI.id;

      todos.forEach((todo) => {
        if (todo.id === currentTodoId && todo.completed) {
          todosUl.removeChild(todoUI);
        }
      });
    });

    for (let i = todos.length - 1; i >= 0; i--) {
      if (todos[i].completed) {
        todos.splice(i, 1);
      }
    }

    storage.set<Todo[]>("todos", todos);
  });
}

const getTodoUIs = () => {
  const todos = document.querySelectorAll(
    ".todo-ul-item"
  ) as NodeListOf<HTMLElement>;

  return [...todos];
};
