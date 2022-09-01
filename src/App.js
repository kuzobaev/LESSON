import React from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchUsers from "./redux/asyncActions/asyncActions";

function App() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => {
    return state;
  });

  console.log(users.data);
  return (
    <div>
      <button
        onClick={() => {
          dispatch(fetchUsers());
        }}
      >
        GET USERS
      </button>

      {/* {users.data.map((item) => {
        return (
          <div>
     
          </div>
        );
      })} */}
    </div>
  );
}

export default App;
