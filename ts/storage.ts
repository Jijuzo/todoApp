import { TypeTodo } from "./demoTodo.js";

const storage = {
  get: function (key: string) {
    const keyItem = localStorage.getItem(key);
    if (keyItem) {
      let value: string = JSON.parse(keyItem);
      return value;
    }
  },

  set: function (key: string, value: string | TypeTodo) {
    if (typeof value === "object") {
      value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
  },
};

export { storage };
