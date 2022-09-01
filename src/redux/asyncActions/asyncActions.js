import { getUserAction } from "./actions";

const fetchUsers = () => {
  return (dispatch) => {
    fetch("https://reqres.in/api/users/")
      .then((response) => response.json())
      .then((json) => dispatch(getUserAction(json)));
  };
};

export default fetchUsers;
