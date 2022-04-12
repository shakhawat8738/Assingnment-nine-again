import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} =props;
    
    // total
    let total = 0 ;
    for(const biodata of cart){
        total =(total + biodata.salary);
        
       
    } 
    // name
    let name='';
    for(const biodata of cart){
        name= (biodata.name)
    }

    // img
    let img='';
    for (const biodata of cart){
        img = (biodata.img)
    }
    return (
        <div>


            {/* cart component data */}  


                <h3>Total Men : {props.cart.length}</h3>
                <h2>Total Salary : ${total}</h2>
                <h3>Name : {name}</h3>
                <img className='cartimg-style' src={img} alt="" />
               
               
            
        </div>
    );
};

export default Cart;