import { storage } from "./storage.js";
import { addTodo } from "./addTodo.js";
import { todos } from "./storage-todos.js";
import { initializeTodos } from "./initializeTodos.js";
import { Todo } from "./types.js";

function setTodoCreationListener() {
  const input = document.querySelector(".task-input") as HTMLInputElement;
  const form = document.querySelector(".task-adding") as HTMLElement;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value.trim() !== "") {
      const randomID = String(Math.random());
      const userInput = {
        name: input.value,
        id: randomID,
        completed: false,
      };

      todos.push(userInput);
      storage.set<Todo[]>("todos", todos);

      addTodo(userInput);
      input.value = "";

      initializeTodos();
    } else {
      input.value = "";
    }
  });
}

export { setTodoCreationListener };
