import { storage } from "./storage.js";
import { addTodo } from "./addTodo.js";
import { tasks } from "./todoapp.js";
import { initializeTodos } from "./initializeTodos.js";

function setTodoCreationListener() {
  const input = document.querySelector(".task-input");
  const form = document.querySelector(".task-adding");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value) {
      const randomID = Math.random();
      const userInput = {
        name: input.value,
        id: randomID,
        completed: false,
      };

      tasks.push(userInput);
      storage.set("tasks", tasks);

      addTodo(userInput);
      input.value = "";

      initializeTodos();
    }
  });
}

export { setTodoCreationListener };
