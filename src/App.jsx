import React, { useState } from "react";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (e) => {
    alert(JSON.stringify(e));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} action="">
        <h1>Регистрация</h1>
        <label htmlFor="firstName">Имя</label>
        <input
          id="firstName"
          type="text"
          {...register("firstName", {
            required: "Поле не должно быть пустым",
            minLength: 2,
          })}
        />
        <div>
          {errors.firstName && (
            <p style={{ color: "white" }}>{errors.firstName.message}</p>
          )}
        </div>

        <label htmlFor="lastName">Фамилия</label>
        <input
          id="firstName"
          type="text"
          {...register("lastName", {
            required: "Поле не должно быть пустым",
            minLength: 2,
          })}
        />
        <div>
          {errors.lastName && (
            <p style={{ color: "white" }}>{errors.lastName.message}</p>
          )}
        </div>

        <label htmlFor="day">Дата рождентя</label>

        <select id="day">
          <option value="1">1</option>
          <option value="1">2</option>
          <option value="1">3</option>
          <option value="1">4</option>
        </select>

        <select id="month">
          <option value="1">Nov</option>
          <option value="2">Dec</option>
          <option value="3">Sen</option>
          <option value="4">Oct</option>
          <option value="5">Apr</option>
        </select>

        <select id="year">
          <option value="2001">2001</option>
          <option value="2002">2002</option>
          <option value="2003">2003</option>
          <option value="2004">2004</option>
          <option value="2005">2005</option>
        </select>

        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
