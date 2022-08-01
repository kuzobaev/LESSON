import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

function AddUser() {
  const [enteredUserName, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  function AddUserHandler(e) {
    e.preventDefault();
    console.log(enteredUserName,enteredAge)
  }

  function userNameChangeHandler(e) {
    setEnteredUsername(e.target.value);
  }
  function userAgeChangeHandler(e) { 
   setEnteredAge(e.target.value)
  }



  return (
    <Card className={classes.input}>
      <form onSubmit={AddUserHandler} action="">
        <label htmlFor="username">UserName</label>
        <input onChange={userNameChangeHandler} type="text" id="username" />

        <label htmlFor="age">Age(Years)</label>

        <input onChange={userAgeChangeHandler} type="number" id="age" />

        <Button type="submit">ADD USER</Button>
      </form>
    </Card>
  );
}

export default AddUser;
