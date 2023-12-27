import { addTodo } from "./addTodo.js";
import { todoModel } from "./todoModel.js";
import { initializeTodos } from "./initializeTodos.js";

function setTodoCreationListener() {
  const input = document.querySelector(".task-input") as HTMLInputElement;
  const form = document.querySelector(".add-todo") as HTMLElement;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value.trim() !== "") {
      const randomID = String(Math.random());
      const userInput = {
        name: input.value,
        id: randomID,
        completed: false,
      };
      addTodo(userInput);
      input.value = "";

      todoModel.items = [...todoModel.items, userInput];
      initializeTodos();
    } else {
      input.value = "";
    }
  });
}

export { setTodoCreationListener };
