import React, { useState } from 'react'
import Book from './component/Book'
import { useEffect } from 'react'
import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
const App = () => {
  const [books,setBooks]=useState([]);
//   const books=[
//     {image: "",title:"Physics",price: 567},
//   {image: "",title:"Math",price: 527},
// {image: "",title:"Chemistry",price: 367}]
useEffect(()=>{
  fetch('https://fakestoreapi.com/products')
  .then(res=>res.json())
  .then(data=>{
    const fdata=data.filter(i=>i.category==="electronics")
    setBooks(fdata)
  })
},[])
  return (
    <div>
    <Header/>
    <div className='booklist'>
      {
        books.map((b,i)=>(
         <Book key={i} book={b}/>
        ))
      }
    </div>
    <Footer/>
    </div>
  )
}

export default App
