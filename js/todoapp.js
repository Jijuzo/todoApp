import { storage } from "./storage.js";
import { setActiveTab } from "./tabSwitch.js";
import { initializeTodos } from "./initializeTodos.js";
import { displayTodos } from "./displayTodos.js";
import { demoTodo } from "./demoTodo.js";
import { handleAddTodo } from "./handleAddTodo.js";
import { setSingleTodoDeletionListener } from "./setSingleTodoDeletionListener.js";
import { setCompletedTodosDeletionListener } from "./setCompletedTodosDeletionListener.js";

const todos = document.createElement("ul");
todos.className = "todo-ul";
let tasks = storage.get("tasks") ?? demoTodo;

displayTodos();
handleAddTodo();
initializeTodos();
setSingleTodoDeletionListener();
setCompletedTodosDeletionListener();
setActiveTab();

export { tasks, todos };
