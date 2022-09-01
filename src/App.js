import React from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchUsers from "./redux/asyncActions/asyncActions";

function App() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => {
    return state;
  });

  return (
    <div>
      <button
        onClick={() => {
          dispatch(fetchUsers());
        }}
      >
        GET USERS
      </button>

      <div></div>
    </div>
  );
}

export default App;
