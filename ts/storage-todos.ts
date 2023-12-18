import { Todo } from "./types.js";
import { storage } from "./storage.js";
import { demoTodos } from "./demoTodos.js";

let todos = storage.get<Todo[]>("todos") ?? demoTodos;

const modifyStorageTodos = (newArray: Todo[]): void => {
  todos = newArray;
};

export { todos, modifyStorageTodos };
