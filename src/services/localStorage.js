export const saveToLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Set state error: ", error.message);
  }
};

export const removeFromLocalStorage = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Set state error: ", error.message);
  }
};

export const loadFromLocalStorage = (key) => {
  try {
    const savedState = localStorage.getItem(key);
    return savedState === null ? undefined : JSON.parse(savedState);
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};
