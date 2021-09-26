import React from 'react';
import './Teacher.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Teacher = (props) => {
   const { name, age, subjects, picture, salary, joining_year } = props.teacher;
   const element = <FontAwesomeIcon icon={faShoppingCart} />
   return (
      <div className="teachr">
         <div className="images">
            <img src={picture} alt="" />
         </div>
         <div className="teachers-detail">
            <h2>name: {name}</h2>
            <p>age: {age}</p>
            <p>subject: {subjects}</p>
            <p >salary: {salary}</p>
            <p >joined: {joining_year}</p>
            <div className="btn-reguler-div">
               <button
                  onClick={() => props.handleAddToCart(props.teacher)}
                  className="btn-regular"
               >{element} add to cart</button>
            </div>
         </div>
      </div>
   );
};

export default Teacher;