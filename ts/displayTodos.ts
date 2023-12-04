import { addTodo } from "./addTodo.js";
import { todos } from "./todoapp.js";

function displayTodos() {
  todos.forEach((todo) => {
    addTodo(todo);
  });
}

export { displayTodos };
