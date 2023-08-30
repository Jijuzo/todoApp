import { addTodo } from "./addTodo.js";
import { tasks } from "./todoapp.js";

function displayTodos() {
  for (let task of tasks) {
    addTodo(task);
  }
}

export { displayTodos };
