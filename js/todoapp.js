import storage from "./storage.js";
import activeTab from "./tabSwitch.js";
import completeTodo from "./completeTodo.js";
import displayTodos from "./displayTodos.js";
import demoTodo from "./demoTodo.js";
import createTodo from "./createTodo.js";
import deleteSingleTodo from "./deleteSingleTodo.js";

const todos = document.createElement("ul");
todos.className = "todo-ul";
let tasks = storage.get("tasks") ?? demoTodo;

displayTodos();

let allTodos = document.querySelectorAll(".todo-ul-item");
let allCheckBoxes = document.querySelectorAll(".check");
const deleteCompletedDiv = document.querySelector(".delete-completed");
deleteCompletedDiv.addEventListener("click", () => {
  allTodos = document.querySelectorAll(".todo-ul-item");
  allTodos.forEach((todo) => {
    if (todo.dataset.completed === "true") {
      todos.removeChild(todo);
    }
  });
  tasks = tasks.filter((task) => task.completed === false);
  storage.set("tasks", tasks);
});

createTodo();
completeTodo();
deleteSingleTodo();
activeTab();

export { deleteCompletedDiv, allTodos, allCheckBoxes, tasks, todos };
