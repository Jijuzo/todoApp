const storage = {
  get: function (key, defaultValue) {
    let value = JSON.parse(localStorage.getItem(key));
    return value ?? defaultValue;
  },

  set: function (key, value) {
    if (typeof value === "object") {
      value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
  },
};

export { storage };
