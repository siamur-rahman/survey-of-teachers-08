import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Teacher from '../Teacher/Teacher';
import './Teachers.css';

const Teachers = () => {

   const [teachers, setTeachers] = useState([]);
   useEffect(() => {
      fetch('teachers.json')
         .then(res => res.json())
         .then(data => setTeachers(data));

   }, [])

   const [cart, setCart] = useState([]);


   const handleAddToCart = (teacher) => {
      const newCart = [...cart, teacher];
      setCart(newCart)
   }

   return (
      <div>
         <h4 >this is teachers{teachers.length}</h4>

         <div className="teachers">
            <div className="teacher">
               {
                  teachers.map(teacher => <Teacher
                     key={teacher.id}
                     teacher={teacher}
                     handleAddToCart={handleAddToCart}
                  >
                  </Teacher>)
               }
            </div>
            <div>
               {/* <h2>cart:{cart.length}</h2> */}
               <Cart

                  cart={cart}

               ></Cart>
            </div>
         </div>
      </div >
   );
};

export default Teachers;