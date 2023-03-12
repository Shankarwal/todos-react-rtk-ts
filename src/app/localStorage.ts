export const loadState = () => {
  try {
    const serialState = localStorage.getItem("appState")!;
    if (serialState) {
      return {
        todos: [],
        filter: "all",
      };
    }
    return JSON.parse(serialState);
  } catch (err) {
    return {
      todos: [],
      filter: "all",
    };
  }
};

export const saveState = (state: {}) => {
  try {
    const serialState = JSON.stringify(state);
    localStorage.setItem("appState", serialState);
  } catch (err) {
    console.log("Error saving state");
  }
};
