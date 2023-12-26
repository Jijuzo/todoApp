import { addTodo } from "./addTodo.js";
import { todoModel } from "./todoModel.js";
import { initializeTodos } from "./initializeTodos.js";

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

      todoModel.items = [...todoModel.items, userInput];

      addTodo(userInput);
      input.value = "";

      initializeTodos();
    } else {
      input.value = "";
    }
  });
}

export { setTodoCreationListener };
