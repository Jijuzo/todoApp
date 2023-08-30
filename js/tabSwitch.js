import { tasks } from "./todoapp.js";
import { initializeTodos } from "./initializeTodos.js";
import { todosReassignment } from "./todosReassignment.js";
import { deleteCompletedButton } from "./deleteCompletedTodosTrigger.js";

const showAll = document.querySelector("#all-button");
const showActive = document.querySelector("#active-button");
const showCompleted = document.querySelector("#completed-button");
const taskAddButton = document.querySelector(".task-adding");

function setActiveTab() {
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
  trashCansVisibility,
  deleteCompletedButtonDisplay,
  taskAddButtonDisplay
) {
  let trashCans = document.querySelectorAll(".completed-trash");
  trashCans.forEach((e) => (e.style.visibility = trashCansVisibility));
  deleteCompletedButton.style.display = deleteCompletedButtonDisplay;
  taskAddButton.style.display = taskAddButtonDisplay;
}

function updateTodoDisplay(todo, displayValue) {
  todo.style.display = displayValue;
}

function showAllTodos() {
  toggleTodosVisibility("hidden", "none", "flex");
  const todos = todosReassignment()[0];
  todos.forEach((todo) => {
    updateTodoDisplay(todo, "block");
  });
}

function showActiveTodos() {
  toggleTodosVisibility("hidden", "none", "flex");
  const todos = todosReassignment()[0];
  todos.forEach((todo) => {
    const currentTodoId = Number(todo.id);
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
  const todos = todosReassignment()[0];
  todos.forEach((todo) => {
    const currentTodoId = Number(todo.id);
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

export { setActiveTab };
