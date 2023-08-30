import { addTodo } from "./addTodo.js";
import { tasks } from "./todoapp.js";

function displayTodos() {
  tasks.forEach((task) => {
    addTodo(task);
  });
}

export { displayTodos };
