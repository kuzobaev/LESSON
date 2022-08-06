import React from "react";
import mealsImage from "../../assets/3007281.jpg";
import classes from "./Header.module.css";

function Header() {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <button></button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="food" />
      </div>
    </>
  );
}

export default Header;
