import React from 'react';
import './Data.css';

const Data = (props) => {


    // destructuring is here  


  const{img,name,job,adress,salary} = props.biodata;
    return (
        
    //    all data dynamically is here

        <div className='div-style'>
            <img className='img-style' src={img} alt="" />
            <h3>Name : {name}</h3>
            <h4>Job : {job}</h4>
            <h5>Adress : {adress}</h5>
            <h4> Salary : ${salary}</h4>
            <button onClick={()=>props.addEventHandler(props.biodata)} className='button-style'>add to cart</button>
            
          
           
           
        </div>
    );
};

export default Data;