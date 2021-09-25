// import React, { useEffect } from 'react';
// import { useState } from 'react/cjs/react.development';
import './Teacher.css';

const Teacher = (props) => {
   const { name, age, subjects, salary, joining_year } = props.teacher;

   // const [images, setImages] = useState([]);

   // useEffect(() => {
   //    fetch('images/bonneval-sebastien-UIpFY1Umamw-unsplash.jpg')
   //       .then(res => res.json())
   //       .then(data => console.log(data));

   // }, [])

   console.log(props);
   return (
      <div className="teachr">

         <h3 >name:{name}</h3>
         <h3>age: {age}</h3>
         <h3 >subject: {subjects}</h3>
         <h3 >salary: {salary}</h3>
         <h5 >joined:{joining_year}</h5>
         <button className="btn-regular">add to cart</button>
      </div>
   );
};

export default Teacher;