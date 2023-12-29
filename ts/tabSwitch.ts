const todosUl = document.querySelector(".todo-ul") as HTMLElement;
const addTodoForm = document.querySelector(".add-todo") as HTMLElement;
const deleteCompletedButton = document.querySelector(
  ".delete-completed"
) as HTMLElement;
const tabs = document.querySelectorAll(".tab");

const toggleTabs = (tab: Element) => {
  const previousActiveTab = document.querySelector(".active") as HTMLElement;
  previousActiveTab.classList.remove("active");
  tab.classList.add("active");
};

const toggleActions = (tab: Element) => {
  const isAllOrActiveTab =
    tab.id === "all-button" || tab.id === "active-button";
  deleteCompletedButton.classList.toggle("hidden", isAllOrActiveTab);
  addTodoForm.classList.toggle("hidden", !isAllOrActiveTab);
};

const toggleUl = (tab: Element) => {
  const pureTabName = tab.id.replace("-button", "");
  todosUl.className = `todo-ul ${pureTabName}-todos`;
};

const setActiveTabListener = () => {
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      toggleTabs(tab);
      toggleActions(tab);
      toggleUl(tab);
    });
  });
};

export { setActiveTabListener };
