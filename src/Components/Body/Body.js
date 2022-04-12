import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Data from '../Data/Data';
import './Body.css'

const Body = () => {
    const [biodatas, setBiodata] =useState([])
    const [cart, setCart] =useState([])
    useEffect(()=>{
        
        fetch('./biodatas.JSON')
        .then(res=>res.json())
        .then(data =>setBiodata(data))
    },[])

    // addEventHandler
    const addEventHandler = (biodata) => {
        const newCart = [...cart, biodata]
        setCart(newCart)
    }
    return (
            
        
        <div className='parent-div'>

            {/* data component part */}
          <div className='body-container'>




           
           {
               biodatas.map(biodata=><Data biodata={biodata} addEventHandler={addEventHandler}></Data>)
           }

           

          </div>


           {/* cart component part */}
            <div className='cart-container'>
               <Cart cart={cart} ></Cart>
            </div>


           

        </div>
    );
};

export default Body;