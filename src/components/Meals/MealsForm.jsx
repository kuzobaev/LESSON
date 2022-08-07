import React from "react";
import Input from "../UI/Input";
import classes from "./MealsForm.module.css";

function MealsForm() {
  return (
    <div className={classes.form}>
      <Input
        label="Amount"
        input={{ id: "ss", defaultValue: "1", min: "1", max: "5", type: "number" }}
      />
      <button> + Add</button>
    </div>
  );
}

export default MealsForm;
