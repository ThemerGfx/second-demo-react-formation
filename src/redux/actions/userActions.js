export const addUser = (user) => ({
  type: "ADD_USER",
  payload: user,
});

export const selectUser = (user) => ({
  type: "SELECT_USER",
  user,
});

export const updateUser = (user) => ({
  type: "UPDATE_USER",
  user,
});

export const deleteUser = (userId) => ({
  type: "DELETE_USER",
  payload: userId,
});
