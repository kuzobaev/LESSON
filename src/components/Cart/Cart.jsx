import React from 'react'
import { Modal } from '../Modal/Modal'
import classes from './Cart.module.css'






export const Cart = (props) => {
  const CartItems = (
    <ul className={classes["cart-items"]}>
      {[{id:'c1', name:'sushi', amount:2 , price:12.09}].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  )
return (
  <Modal onCloseCart={props.onCloseCart}>
    {CartItems}
    <div >
    <div className={classes.total}>
      <span>Total Amount</span>
      <span>323</span>
    </div>

    <div className={classes.actions}> 
    <button onClick={props.onCloseCart}>Close</button>
    <button>Order</button>
    </div>
  </div>
  </Modal>
  
)
 
}