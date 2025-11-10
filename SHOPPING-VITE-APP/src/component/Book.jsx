import React, { useState } from 'react'
import './Book.css'
function Book({book}) {
  const [count,setCount]=useState(1);
  function increment(){
    setCount(count+1)
    console.log("count="+count)
  }
  function decrement(){
    if(count>1)
    setCount(count-1)
    console.log("count="+count)
  }
  function addtocart(){
    alert(`successfully added ${book.title}`)
  }
  return (
    <div className='card'>
      <img src={book.image} width={200} height={200} alt="image"/>
      <h3>Title: {book.title}</h3>
      <h4>Price: ₹{book.price}/-</h4>
      <div style={{margin: "10px"}}>
        <button onClick={decrement} style={{width:"20px"}}>-</button>
        <span>{count}</span>
        <button onClick={increment}style={{width:"20px"}}>+</button>
      </div>
      <button id="cart1" onClick={addtocart}>Add To Cart</button>
    </div>
  )
}

export default Book
