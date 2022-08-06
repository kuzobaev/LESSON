import React from "react";
import mealsImage from "../../assets/wp7029400-fast-food-4k-desktop-wallpapers.jpg";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";

function Header() {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton/>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="food" />
      </div>
    </>
  );
}

export default Header;
