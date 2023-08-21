const storage = {
  get: function (key, defaultValue) {
    let value = JSON.parse(localStorage.getItem(key));
    return value || defaultValue;
  },

  set: function (key, value) {
    if (typeof value === "object") {
      value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
  },
};

const demoTodo = [
  {
    name: "Follow Jijuzo on GitHub",
    id: 1,
    completed: false,
  },
];

//**Todo creation**
const todos = document.createElement("ul");
todos.className = "todo-ul";
function addTodo(todo) {
  const todosDiv = document.querySelector("#tab1");
  const newTodo = document.createElement("li");
  newTodo.className = "todo-ul-item";
  newTodo.setAttribute("completed", todo.completed);
  newTodo.innerHTML = `
            <input id="${todo.id}" type="checkbox" class="check">
            <label class="task-label" for="${todo.id}">${todo.name}</label>
            <button class="completed-trash">
            <i class="fa-solid fa-trash-can"></i>
            </button>
    `;
  todos.appendChild(newTodo);
  todosDiv.appendChild(todos);
}

// **using demo todo**
let tasks = storage.get("tasks") ?? demoTodo;
function displayTodos() {
  for (let task of tasks) {
    addTodo(task);
  }
}

displayTodos();

// **Creating and adding todo**
const input = document.querySelector(".task-input");
const addButton = document.querySelector(".add-button");
addButton.addEventListener("click", () => {
  if (input.value) {
    const randomID = Math.random();
    const userInput = {
      name: input.value,
      id: randomID,
      completed: false,
    };

    tasks.push(userInput);
    storage.set("tasks", tasks);
    // localStorage.setItem("tasks", JSON.stringify(tasks));

    addTodo(userInput);
    input.value = "";

    allCheckBoxes = document.querySelectorAll(".check");
    completeTodo();
  }
});

//**Todo completing**
let allCheckBoxes = document.querySelectorAll(".check");
function completeTodo() {
  for (let checkbox of allCheckBoxes) {
    const currentTodo = checkbox.parentElement;
    const label = currentTodo.children[1];
    if (currentTodo.getAttribute("completed") === "true") {
      checkbox.checked = true;
      label.style.textDecoration = "line-through";
    } else {
      checkbox.checked = false;
    }

    checkbox.addEventListener("click", () => {
      const currentTodoId = Number(currentTodo.firstElementChild.id);
      currentTodo.setAttribute("completed", checkbox.checked);
      checkbox.checked
        ? (label.style.textDecoration = "line-through")
        : (label.style.textDecoration = "none");

      for (let task of tasks) {
        if (task.id === currentTodoId) {
          task.completed = checkbox.checked;
        }
      }
      storage.set("tasks", tasks);
    });
  }
}

completeTodo();

//**Switching between tabs**
const showAll = document.querySelector("#all-button");
const showActive = document.querySelector("#active-button");
const showCompleted = document.querySelector("#completed-button");
let allTodos = document.querySelectorAll(".todo-ul-item");
let trashCans = document.querySelectorAll(".completed-trash");
const filterBtnContainer = document.querySelectorAll(".tab-links");
const taskAddDiv = document.querySelector(".task-adding");
const deleteCompletedDiv = document.querySelector(".delete-completed");

showAll.addEventListener("click", () => {
  allTodos = document.querySelectorAll(".todo-ul-item");
  trashCans = document.querySelectorAll(".completed-trash");
  trashCans.forEach((e) => (e.style.visibility = "hidden"));
  deleteCompletedDiv.style.display = "none";
  taskAddDiv.style.display = "flex";
  for (let todo of allTodos) {
    todo.style.display = "block";
  }
});
31;
showActive.addEventListener("click", () => {
  allTodos = document.querySelectorAll(".todo-ul-item");
  trashCans = document.querySelectorAll(".completed-trash");
  trashCans.forEach((e) => (e.style.visibility = "hidden"));
  deleteCompletedDiv.style.display = "none";
  taskAddDiv.style.display = "flex";
  for (let todo of allTodos) {
    todo.style.display =
      todo.getAttribute("completed") === "true" ? "none" : "block";
  }
});

showCompleted.addEventListener("click", () => {
  allTodos = document.querySelectorAll(".todo-ul-item");
  trashCans = document.querySelectorAll(".completed-trash");
  trashCans.forEach((e) => (e.style.visibility = "visible"));
  deleteCompletedDiv.style.display = "flex";
  taskAddDiv.style.display = "none";
  for (let todo of allTodos) {
    todo.style.display =
      todo.getAttribute("completed") === "true" ? "block" : "none";
  }
  completeTodo();
});

//**Deleting todos**
todos.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-trash-can")) {
    const currentTodo = e.target.parentElement.parentElement;
    todos.removeChild(currentTodo);

    const todoIndex = tasks.findIndex(
      (task) => task.id === Number(currentTodo.firstElementChild.id)
    );

    tasks.splice(todoIndex, 1);
    storage.set("tasks", tasks);
  }
});

//**Delete completed todos**
deleteCompletedDiv.addEventListener("click", () => {
  allTodos = document.querySelectorAll(".todo-ul-item");
  allTodos.forEach((todo) => {
    if (todo.getAttribute("completed") === "true") {
      todos.removeChild(todo);
    }
  });
  tasks = tasks.filter((task) => task.completed === false);
  storage.set("tasks", tasks);
});

//**Active tab indicator**
const tabs = document.querySelectorAll(".nav-section");
tabs.forEach((link) => {
  link.addEventListener("click", () => {
    tabs.forEach((link) => {
      link.classList.remove("active");
    });
    link.classList.add("active");
  });
});
