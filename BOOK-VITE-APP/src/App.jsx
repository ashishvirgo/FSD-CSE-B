import React from 'react'
import Book from './component/Book'
import Header from './component/Header'
import Footer from './component/Footer'
const App = () => {
    const data=[
        {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-Pj3GLKl1TXKSCsKHtfhg3HeHcXY86mrHg&s",title: "Physics", price: 453},
        {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-Pj3GLKl1TXKSCsKHtfhg3HeHcXY86mrHg&s",title: "Chemistry", price: 583},
        {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-Pj3GLKl1TXKSCsKHtfhg3HeHcXY86mrHg&s",title: "Math", price: 745}
    ];
  return (
    <div>
    <Header/>
    <div className='booklist'>
     {
        data.map((b,i)=>(
            <Book key={i} book={b}/>
        ))
     } 
    </div>
    <Footer/>
    </div>
  )
}

export default App
