import { deleteCompletedButton } from "./setCompletedTodosDeletionListener.js";
import { todos } from "./storage-todos.js";

const taskAddButton = document.querySelector(".task-adding") as HTMLElement;
const showAll = document.querySelector("#all-button") as HTMLElement;
const showActive = document.querySelector("#active-button") as HTMLElement;
const showCompleted = document.querySelector(
  "#completed-button"
) as HTMLElement;

const toggleTabs = (tab: Element) => {
  const previousActiveTab = document.querySelector(".active") as HTMLElement;
  previousActiveTab.classList.remove("active");
  tab.classList.add("active");
};

function setActiveTabListener() {
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const isAllOrActiveTab =
        tab.id === "all-button" || tab.id === "active-button";
      toggleTabs(tab);
      toggleActions(isAllOrActiveTab);
    });
  });
}

const toggleActions = (isAllOrActiveTab: boolean) => {
  const trashCans = document.querySelectorAll(
    ".completed-trash"
  ) as NodeListOf<HTMLElement>;
  trashCans.forEach((trashCan) => {
    trashCan.style.display = isAllOrActiveTab ? "none" : "inline";
  });
  deleteCompletedButton.style.display = isAllOrActiveTab ? "none" : "flex";
  taskAddButton.style.display = !isAllOrActiveTab ? "none" : "flex";
};

const getTodoUIs = () => {
  const todos = document.querySelectorAll(
    ".todo-ul-item"
  ) as NodeListOf<HTMLElement>;

  return [...todos];
};

const getCompletedTodoIds = () => {
  return todos.filter((todo) => todo.completed).map((todo) => todo.id);
};

const toggleTodo = (todoUI: HTMLElement, status: boolean) => {
  todoUI.style.display = status ? "block" : "none";
};

const showAllTodos = () => {
  getTodoUIs().forEach((todo) => (todo.style.display = "block"));
};

const showActiveTodos = () => {
  const completedTodoIds = getCompletedTodoIds();

  getTodoUIs().forEach((todo) => {
    const isActive = !completedTodoIds.includes(todo.id);
    toggleTodo(todo, isActive);
  });
};

const showCompletedTodos = () => {
  const completedTodoIds = getCompletedTodoIds();

  getTodoUIs().forEach((todo) => {
    const isCompleted = completedTodoIds.includes(todo.id);
    toggleTodo(todo, isCompleted);
  });
};

showAll.addEventListener("click", showAllTodos);
showActive.addEventListener("click", showActiveTodos);
showCompleted.addEventListener("click", showCompletedTodos);
export { setActiveTabListener };
