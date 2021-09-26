


import './Teacher.css';

const Teacher = (props) => {
   console.log(props);
   const { name, age, subjects, picture, salary, joining_year } = props.teacher;



   return (
      <div className="teachr">

         <div className="images">
            <img src={picture} alt="" />
         </div>
         <div className="teachers-details">
            <h3 >name:{name}</h3>
            <h3>age: {age}</h3>
            <h3 >subject: {subjects}</h3>
            <h3 >salary: {salary}</h3>
            <h5 >joined:{joining_year}</h5>
            <button className="btn-regular">add to cart</button>
         </div>
      </div>
   );
};

export default Teacher;