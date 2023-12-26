import { addTodo } from "./addTodo.js";
import { todoModel } from "./todoModel.js";

function displayTodos() {
  todoModel.items.forEach((todo) => {
    addTodo(todo);
  });
}

export { displayTodos };
