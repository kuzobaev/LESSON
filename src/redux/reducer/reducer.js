export const GET_USERS = "GET_USERS";

const initialState = {
  users: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { users: action.payload };

    default:
      return state;
  }
};

export default reducer;
