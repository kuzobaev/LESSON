import React, { useEffect, useState } from "react";

function App() {
  const [state, setState] = useState(false);
  const [users, setUsers] = useState([]);

  const toggleHandler = () => {
    setState((prev) => !prev);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json() )
      .then((json) => console.log(json))
  }, [state]);

  return (
    <div>
      <button onClick={toggleHandler}>toogle </button>

      {users.map(({username}) => {
        return <p>{username}</p>;
      })}

      {state && <h1>Hello</h1>}
    </div>
  );
}

export default App;
