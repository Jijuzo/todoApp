import { addTodo } from "./addTodo.js";
import { tasks } from "./todoapp.js";
import { isTypeTodo } from "./setSingleTodoDeletionListener.js";

function displayTodos() {
  if (isTypeTodo(tasks)) {
    tasks.forEach((task) => {
      addTodo(task);
    });
  }
}

export { displayTodos };
