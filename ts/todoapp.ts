import { storage } from "./storage.js";
import { setActiveTabListener } from "./tabSwitch.js";
import { initializeTodos } from "./initializeTodos.js";
import { displayTodos } from "./displayTodos.js";
import { demoTodos } from "./demoTodos.js";
import { setTodoCreationListener } from "./setTodoCreationListener.js";
import { setSingleTodoDeletionListener } from "./setSingleTodoDeletionListener.js";
import { setCompletedTodosDeletionListener } from "./setCompletedTodosDeletionListener.js";
import { Todo } from "./types.js";

const todosUl = document.createElement("ul");
todosUl.className = "todo-ul";
let todos = storage.get<Todo[]>("todos") ?? demoTodos;

displayTodos();
setTodoCreationListener();
initializeTodos();
setSingleTodoDeletionListener();
setCompletedTodosDeletionListener();
setActiveTabListener();

export { todos, todosUl };
