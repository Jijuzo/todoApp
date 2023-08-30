import { storage } from "./storage.js";
import { setActiveTab } from "./tabSwitch.js";
import { initializeTodos } from "./initializeTodos.js";
import { displayTodos } from "./displayTodos.js";
import { demoTodo } from "./demoTodo.js";
import { createTodo } from "./createTodo.js";
import { deleteSingleTodoTrigger } from "./deleteSingleTodoTrigger.js";
import { deleteCompletedTodosTrigger } from "./deleteCompletedTodosTrigger.js";

const todos = document.createElement("ul");
todos.className = "todo-ul";
let tasks = storage.get("tasks") ?? demoTodo;

displayTodos();
createTodo();
initializeTodos();
deleteSingleTodoTrigger();
deleteCompletedTodosTrigger();
setActiveTab();

export { tasks, todos };
