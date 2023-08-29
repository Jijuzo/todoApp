import storage from "./storage.js";
import { todos, tasks } from "./todoapp.js";

function deleteSingleTodo() {
  todos.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-trash-can")) {
      const currentTodo = e.target.parentElement.parentElement;
      todos.removeChild(currentTodo);

      const todoIndex = tasks.findIndex(
        (task) => task.id === Number(currentTodo.firstElementChild.id)
      );

      tasks.splice(todoIndex, 1);
      storage.set("tasks", tasks);
    }
  });
}

export default deleteSingleTodo;
