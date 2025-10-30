import React from 'react'
import { useState } from 'react';
import '../App.css'
const Book = ({book}) => {
  const [count,setCount]=useState(0);
  function decrementCount(){
    let mycount=0;
    if(count>0)
    mycount=count-1;
    setCount(mycount)
  }
  function incrementCount(){
    let mycount=0;
    mycount=count+1;
    setCount(mycount)
  }
  function handleButton(){
    alert("Book Added in cart successfully");
  }
  return (
    <div className='card'>
      <img src={book.image} width="200" height="200"/>
      <h3>Title:{book.title}</h3>
      <h4>Price: ₹{book.price}/-</h4>
      <div>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
      </div>
      <button onClick={handleButton}>Add To Cart</button>
    </div>
  )
}

export default Book
