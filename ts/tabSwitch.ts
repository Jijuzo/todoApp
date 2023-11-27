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
  const trashCans = document.querySelectorAll(
    ".completed-trash"
  ) as NodeListOf<HTMLElement>;
  trashCans.forEach((trashCan) => {
    trashCan.style.visibility = trashCansVisibility;
  });

  deleteCompletedButton.style.display = deleteCompletedButtonDisplay;
  taskAddButton.style.display = taskAddButtonDisplay;
}

function updateTodoVisibility(
  todos: NodeListOf<HTMLElement>,
  displayValue: string,
  hideValue: string
) {
  todos.forEach((todo) => {
    const currentTodoId = todo.id;
    tasks.forEach((task) => {
      if (currentTodoId === task.id) {
        const finalDisplayValue = task.completed ? hideValue : displayValue;
        todo.style.display = finalDisplayValue;
      }
    });
  });
}

function showAllTodos() {
  toggleTodosVisibility("hidden", "none", "flex");
  const todos = reassignTodos()[0] as NodeListOf<HTMLElement>;
  updateTodoVisibility(todos, "none", "flex");
}

function showActiveTodos() {
  toggleTodosVisibility("hidden", "none", "flex");
  const todos = reassignTodos()[0] as NodeListOf<HTMLElement>;
  updateTodoVisibility(todos, "none", "block");
}

function showCompletedTodos() {
  toggleTodosVisibility("visible", "flex", "none");
  initializeTodos();
  const todos = reassignTodos()[0] as NodeListOf<HTMLElement>;
  updateTodoVisibility(todos, "block", "none");
}

showAll.addEventListener("click", showAllTodos);
showActive.addEventListener("click", showActiveTodos);
showCompleted.addEventListener("click", showCompletedTodos);

export { setActiveTabListener };
