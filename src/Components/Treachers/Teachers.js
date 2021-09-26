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



   return (
      <div>
         <h4 >this is teachers{teachers.length}</h4>

         <div className="teachers">
            <div className="teacher">
               {
                  teachers.map(teacher => <Teacher
                     key={teacher.id}
                     teacher={teacher}
                  >
                  </Teacher>)
               }
            </div>
            <div>

               <Cart></Cart>
            </div>
         </div>
      </div >
   );
};

export default Teachers;