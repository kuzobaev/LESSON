import React, { useState, useEffect, useContext } from "react";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/authContext";

function App() {
  const ctxData = useContext(AuthContext)
  return (
    <React.Fragment>
      <MainHeader/>
      <main>
        {!ctxData.isLoggedIn && <Login onLogin/>}
        {ctxData.isLoggedIn && <Home onLogout/>}
      </main>
    </React.Fragment>
  );
}

export default App;
