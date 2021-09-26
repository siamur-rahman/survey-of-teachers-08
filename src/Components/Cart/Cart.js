import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import './Cart.css';

const Cart = (props) => {
   console.log(props.cart);
   const { cart } = props;
   let total = 0;
   for (const teacher of cart) {
      total = total + teacher.salary;
   }
   return (
      <div className="cart">
         <h2>Teachers Added:{props.cart.length}</h2>
         <p><b> Total Cost:</b> $ {total}</p>
         <div className="btn-cart-div">         <button className="cart-btn"> <FontAwesomeIcon icon={faInfoCircle} /> Teacher info</button></div>
      </div>
   );
};

export default Cart;