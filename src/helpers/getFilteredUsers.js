import { loadFromLocalStorage } from "../services/localStorage";

export const getFilteredUsers = (filter, users) => {
  if (filter === "following") {
    const filteredUsers = users.filter(({ id }) => {
      return loadFromLocalStorage(`user_${id}`) === true;
    });
    return filteredUsers;
  }
  if (filter === "follow") {
    const filteredUsers = users.filter(({ id }) => {
      return loadFromLocalStorage(`user_${id}`) !== true;
    });
    return filteredUsers;
  }
  return users;
};
