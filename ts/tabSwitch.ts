import { tasks } from "./todoapp.js";
import { initializeTodos } from "./initializeTodos.js";
import { reassignTodos } from "./reassignTodos.js";
import { deleteCompletedButton } from "./setCompletedTodosDeletionListener.js";

const showAll = document.querySelector("#all-button") as HTMLElement;
const showActive = document.querySelector("#active-button") as HTMLElement;
const showCompleted = document.querySelector(
  "#completed-button"
) as HTMLElement;
const taskAddButton = document.querySelector(".task-adding") as HTMLElement;

function setActiveTabListener() {
  const tabs = document.querySelectorAll(".nav-section");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((tab) => {
        tab.classList.remove("active");
      });
      tab.classList.add("active");
    });
  });
}

function toggleTodosVisibility(
  trashCansVisibility: string,
  deleteCompletedButtonDisplay: string,
  taskAddButtonDisplay: string
) {
  let trashCans = document.querySelectorAll(
    ".completed-trash"
  ) as NodeListOf<HTMLElement>;
  trashCans.forEach((e) => {
    e.style.visibility = trashCansVisibility;
  });
  deleteCompletedButton.style.display = deleteCompletedButtonDisplay;
  taskAddButton.style.display = taskAddButtonDisplay;
}

function updateTodoDisplay(todo: HTMLElement, displayValue: string) {
  todo.style.display = displayValue;
}

function showAllTodos() {
  toggleTodosVisibility("hidden", "none", "flex");
  const todos = reassignTodos()[0] as NodeListOf<HTMLElement>;
  todos.forEach((todo) => {
    updateTodoDisplay(todo, "block");
  });
}

function showActiveTodos() {
  toggleTodosVisibility("hidden", "none", "flex");
  const todos = reassignTodos()[0] as NodeListOf<HTMLElement>;
  todos.forEach((todo) => {
    const currentTodoId = todo.id;
    tasks.forEach((task) => {
      if (currentTodoId === task.id) {
        updateTodoDisplay(todo, task.completed ? "none" : "block");
      }
    });
  });
}

function showCompletedTodos() {
  toggleTodosVisibility("visible", "flex", "none");
  initializeTodos();
  const todos = reassignTodos()[0] as NodeListOf<HTMLElement>;
  todos.forEach((todo) => {
    const currentTodoId = todo.id;
    tasks.forEach((task) => {
      if (currentTodoId === task.id) {
        updateTodoDisplay(todo, task.completed ? "block" : "none");
      }
    });
  });
}

showAll.addEventListener("click", showAllTodos);
showActive.addEventListener("click", showActiveTodos);
showCompleted.addEventListener("click", showCompletedTodos);

export { setActiveTabListener };
