const initialState = {
  users: [],
  updateUserData: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [
          ...state.users,
          {
            id: action.payload.id,
            name: action.payload.name,
            job: action.payload.job,
          },
        ],
      };

    case "SELECT_USER":
      return {
        ...state,
        updateUserData: action.user,
      };

    case "UPDATE_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.user.id ? { ...user, ...action.user } : user
        ),
      };

    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };

    default:
      return state;
  }
};

export default userReducer;
