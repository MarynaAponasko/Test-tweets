export const getVisibleUsers = (users, visibleUsersCount) => {
  return users.slice(0, visibleUsersCount);
};
