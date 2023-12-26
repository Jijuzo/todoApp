import { storage } from "./storage.js";
import { Todo } from "./types.js";
import { demoTodos } from "./demoTodos.js";

export const todoModel = {
  get items() {
    return storage.get<Todo[]>("todos") ?? demoTodos;
  },

  set items(items) {
    storage.set("todos", items);
  },
};
