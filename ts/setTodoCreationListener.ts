import { storage } from "./storage.js";
import { addTodo } from "./addTodo.js";
import { tasks } from "./todoapp.js";
import { initializeTodos } from "./initializeTodos.js";
import { isTypeTodo } from "./setSingleTodoDeletionListener.js";

function setTodoCreationListener() {
  const input = document.querySelector(".task-input") as HTMLInputElement;
  const form = document.querySelector(".task-adding") as HTMLElement;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value) {
      const randomID = Math.random();
      const userInput = {
        name: input.value,
        id: randomID,
        completed: false,
      };

      if (isTypeTodo(tasks)) {
        tasks.push(userInput);
        storage.set("tasks", tasks);

        addTodo(userInput);
        input.value = "";

        initializeTodos();
      }
    }
  });
}

export { setTodoCreationListener };
