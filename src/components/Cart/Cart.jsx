import React, { useContext } from "react";
import Modal from "../Modal/Modal";
import  CartContext from "../../Store/cartContext";

function Cart() {
  const date = useContext(CartContext);
  console.log(date)
  return (
    <div>

      <Modal />
    </div>
  );
}

export default Cart;
