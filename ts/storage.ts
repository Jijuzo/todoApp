const storage = {
  get: function <T>(key: string) {
    const keyItem = localStorage.getItem(key);
    if (keyItem) {
      let value: T = JSON.parse(keyItem);
      return value;
    }
  },

  set: function <T>(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value));
  },
};

export { storage };
