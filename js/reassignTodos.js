export function reassignTodos() {
  let allTodos = document.querySelectorAll(".todo-ul-item");
  let allCheckBoxes = document.querySelectorAll(".check");
  let reassignedVariables = [allTodos, allCheckBoxes];
  return reassignedVariables;
}
