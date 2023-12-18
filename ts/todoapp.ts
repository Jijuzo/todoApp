import { setActiveTabListener } from "./tabSwitch.js";
import { initializeTodos } from "./initializeTodos.js";
import { displayTodos } from "./displayTodos.js";
import { setTodoCreationListener } from "./setTodoCreationListener.js";
import { setSingleTodoDeletionListener } from "./setSingleTodoDeletionListener.js";
import { setCompletedTodosDeletionListener } from "./setCompletedTodosDeletionListener.js";

displayTodos();
setTodoCreationListener();
initializeTodos();
setSingleTodoDeletionListener();
setCompletedTodosDeletionListener();
setActiveTabListener();
