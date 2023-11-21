import { Todo } from "./types.js";

const storage = {
  get: function (key: string) {
    const keyItem = localStorage.getItem(key);
    if (keyItem) {
      let value: Todo[] = JSON.parse(keyItem);
      return value;
    }
  },

  set: function (key: string, value: string) {
    localStorage.setItem(key, value);
  },
};

export { storage };
