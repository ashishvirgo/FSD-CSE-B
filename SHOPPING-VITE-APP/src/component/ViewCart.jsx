import React from 'react'
import { useContext } from 'react';
import UserContext from '../context/UserContext';
const ViewCart = () => {
    const { cartItem} = useContext(UserContext);
    const grandtotal=cartItem.reduce((sum,item)=>sum+item.quantity*item.price,0)
  return (
    <div>
      <h1>My Cart</h1>
      {
        cartItem.map((b)=>(
            <div className='cartitem'>
             <img src={b.image} width={50} height={50}/>
             <h2>Quantity:{b.quantity}</h2> 
             <h2>Price:₹{b.price}/-</h2> 
             <h2>Total:₹{b.price*b.quantity}</h2>  
             <button className="edit-btn">Remove</button>
            </div>
        ))
      }
     <h2>Grandtotal: ₹{grandtotal}/-</h2>
     <button className="edit-btn">Place Order</button>
    </div>
  )
}

export default ViewCart
