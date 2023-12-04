import { tasks } from "./todoapp.js";
import { reassignTodos } from "./reassignTodos.js";
import { deleteCompletedButton } from "./setCompletedTodosDeletionListener.js";

const taskAddButton = document.querySelector(".task-adding") as HTMLElement;

function setActiveTabListener() {
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((tab) => {
        tab.classList.remove("active");
      });
      tab.classList.add("active");
      toggleTodosVisibility(tab.id);
    });
  });
}

function toggleTrashCansVisibility(isAllOrActiveTab: boolean) {
  const trashCans = document.querySelectorAll(
    ".completed-trash"
  ) as NodeListOf<HTMLElement>;
  trashCans.forEach((trashCan) => {
    trashCan.style.visibility = isAllOrActiveTab ? "hidden" : "visible";
  });
}

function toggleButtonsVisibility(isAllOrActiveTab: boolean) {
  deleteCompletedButton.style.display = isAllOrActiveTab ? "none" : "flex";
  taskAddButton.style.display = isAllOrActiveTab ? "flex" : "none";
}

function filterAndDisplayTodos(activeTab: string) {
  const [todos] = reassignTodos() as [NodeListOf<HTMLElement>];
  todos.forEach((todo) => {
    const currentTodoId = todo.id;
    const matchingTask = tasks.find((task) => task.id === currentTodoId);
    const shouldDisplay =
      activeTab === "all-button" || !matchingTask
        ? "block"
        : activeTab === "active-button"
        ? !matchingTask.completed
          ? "block"
          : "none"
        : matchingTask.completed
        ? "block"
        : "none";
    todo.style.display = shouldDisplay;
  });
}

function toggleTodosVisibility(activeTab: string) {
  const isAllOrActiveTab =
    activeTab === "all-button" || activeTab === "active-button";
  toggleTrashCansVisibility(isAllOrActiveTab);
  toggleButtonsVisibility(isAllOrActiveTab);
  filterAndDisplayTodos(activeTab);
}

export { setActiveTabListener };
