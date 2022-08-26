import React from 'react';
import { useReducer } from 'react';
import CardContext from './Cart-context';

const cartReducer = (state, action) => {
  switch (action.type) {

    case 'ADD_FOOD':
      return {
        items: [...state.items, action.food],
        totalAmount: state.totalAmount + action.food.totalAmount,
      };


    case 'DELET_FOOD':
      return {
        items: state.filter((el) => {
          return el.id !== action.id;
        }),
      };

      
    case 'CLEAR_CART':
      return { type: [], totalAmount: 0 };
    default:
      return state;
  }
};

export const CartProvider = (props) => {
  const [stateOrderFood, dispatchOrderFood] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
  });

  const addItem = (item) => {
    dispatchOrderFood({ type: 'ADD_FOOD', food: item });
  };

  const removeItem = (id) => {
    dispatchOrderFood({ type: 'DELETE_FOOD', id: id });
  };

  const cleareCart = () => {
    dispatchOrderFood({ type: 'CLEAR_CART' });
  };

  const cartContext = {
    items: stateOrderFood.items,
    totalAmount: stateOrderFood.totalAmount,
    addItem: addItem,
    removeItem: removeItem,
    clearCard: cleareCart,
  };

  return (
    <CardContext.Provider value={cartContext}>
      {props.children}
    </CardContext.Provider>
  );
};
