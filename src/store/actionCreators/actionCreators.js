import { INCREMENT, DECREMENT, SHOW_COUNTER } from "../utilits/types";

export const increment = () => {
  return () => {};
};

export const asyncIncrement = () => {
  return async (dispatch, getState) => {
    setTimeout(() => {
      dispatch({ type: INCREMENT });
    }, 2000);
  };
};

export const asyncLogin = () => {
  return async () => {
    const response = await fetch("");
  };
};
