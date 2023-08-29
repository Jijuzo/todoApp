import { allTodos, deleteCompletedDiv } from "./todoapp.js";
import completeTodo from "./completeTodo.js";

const showAll = document.querySelector("#all-button");
const showActive = document.querySelector("#active-button");
const showCompleted = document.querySelector("#completed-button");

export default function activeTab() {
  const tabs = document.querySelectorAll(".nav-section");
  tabs.forEach((link) => {
    link.addEventListener("click", () => {
      tabs.forEach((link) => {
        link.classList.remove("active");
      });
      link.classList.add("active");
    });
  });
}

function todosVisibility(
  visibility,
  display1,
  display2,
  isShowAll,
  isShowActive
) {
  let trashCans = document.querySelectorAll(".completed-trash");
  const taskAddDiv = document.querySelector(".task-adding");
  trashCans.forEach((e) => (e.style.visibility = visibility));
  deleteCompletedDiv.style.display = display1;
  taskAddDiv.style.display = display2;
  for (let todo of allTodos) {
    if (isShowAll) {
      todo.style.display = "block";
    } else if (isShowActive) {
      todo.style.display = todo.dataset.completed === "true" ? "none" : "block";
    } else {
      todo.style.display = todo.dataset.completed === "true" ? "block" : "none";
    }
  }
}

showAll.addEventListener("click", () => {
  todosVisibility("hidden", "none", "flex", true, false);
});
31;
showActive.addEventListener("click", () => {
  todosVisibility("hidden", "none", "flex", false, true);
});

showCompleted.addEventListener("click", () => {
  todosVisibility("visible", "flex", "none", false, false);
  completeTodo();
});
