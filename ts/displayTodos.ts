import { addTodo } from "./addTodo.js";
import { todos } from "./storage-todos.js";

function displayTodos() {
  todos.forEach((todo) => {
    addTodo(todo);
  });
}

export { displayTodos };
