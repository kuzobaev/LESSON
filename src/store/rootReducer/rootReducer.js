import { createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { DECREMENT, INCREMENT, SHOW_COUNTER } from "../utilits/types";

const counterState = {
  counter: 0,
  isShow: true,
};

export const counterReducer = (state = counterState, action) => {
  if (action.type === INCREMENT) {
    return {
      counter: state.counter + 1,
      ...state,
    };
  }

  if (action.type === DECREMENT) {
    return {
      counter: state.counter - 1,
      ...state,
    };
  }
  if (action.type === SHOW_COUNTER) {
    return {
      ...state,
      isShow: !state.isShow,
    };
  }

  return state;
};
