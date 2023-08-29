import storage from "./storage.js";
import completeTodo from "./completeTodo.js";
import addTodo from "./addTodo.js";
import { tasks } from "./todoapp.js";

// **Creating and adding todo**
function createTodo() {
  const input = document.querySelector(".task-input");
  const addButton = document.querySelector(".add-button");
  addButton.addEventListener("click", () => {
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

      completeTodo();
    }
  });
}

export default createTodo;
