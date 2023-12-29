import { Todo } from "./types.js";
import { todosUl } from "./addTodo.js";
import { todoModel } from "./todoModel.js";

const deleteCompletedButton = document.querySelector(
  ".delete-completed"
) as HTMLElement;

function setCompletedTodosDeletionListener() {
  deleteCompletedButton.addEventListener("click", () => {
    const activeTodos: Todo[] = [];
    todoModel.items.forEach((todo) => {
      const todoUI = document.getElementById(`${todo.id}`) as HTMLElement;
      todo.completed ? todosUl.removeChild(todoUI) : activeTodos.push(todo);
    });
    todoModel.items = activeTodos;
  });
}

export { setCompletedTodosDeletionListener };
