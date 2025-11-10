import React from 'react'
import { useState } from 'react'
import Book from '../component/Book'
import { useEffect } from 'react'
import '../App.css'
const Shoplist = () => {
      
  const [books,setBooks]=useState([]);
  const [error,setError]=useState(null);
  const [loading,setLoading]=useState(true);

useEffect(()=>{
  fetch('https://fakestoreapi.com/products')
  .then(res=>res.json())
  .then(data=>{
    // const fdata=data.filter(i=>i.category==="electronics")
    setBooks(data)
    setLoading(false);
  })
  .catch(err=>{
    setError(err.message);
    setLoading(false)
  })
},[])
//  if (loading) {
//     return <h1 style={{ textAlign: 'center', marginTop: '50px' }}>Loading...</h1>
//   }

//   if (error) {
//     return <h2 style={{ color: 'red', textAlign: 'center' }}>Error: {error}</h2>
//   }
  return (
    <div>
      {loading && <h2>Loading books...</h2>}
    {error && (
          <h2 style={{ color: 'red', marginTop: '20px' }}>
            Error: {error}
          </h2>
        )}
    <div className='booklist'>
      {
        books.map((b,i)=>(
         <Book key={i} book={b}/>
        ))
      }
    </div>
    </div>
  )
}

export default Shoplist
