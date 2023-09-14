import { storage } from "./storage.js";
import { setActiveTabListener } from "./tabSwitch.js";
import { initializeTodos } from "./initializeTodos.js";
import { displayTodos } from "./displayTodos.js";
import { demoTodo } from "./demoTodo.js";
import { setTodoCreationListener } from "./setTodoCreationListener.js";
import { setSingleTodoDeletionListener } from "./setSingleTodoDeletionListener.js";
import { setCompletedTodosDeletionListener } from "./setCompletedTodosDeletionListener.js";

const todos = document.createElement("ul");
todos.className = "todo-ul";
let tasks = storage.get("tasks") ?? demoTodo;

displayTodos();
setTodoCreationListener();
initializeTodos();
setSingleTodoDeletionListener();
setCompletedTodosDeletionListener();
setActiveTabListener();

export { tasks, todos };
