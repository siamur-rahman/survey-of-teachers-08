import React from 'react';
import './Cart.css';

const Cart = (props) => {
   console.log(props.cart);
   const { cart } = props;

   let total = 0;

   for (const teacher of cart) {
      total = total + teacher.salary;
   }

   return (
      <div>
         <h2>Teachers Added:{props.cart.length}</h2>
         <br />
         <p>total:${total}</p>


         {/* <h2>Total Cost:{total}</h2> */}
      </div>
   );
};

export default Cart;