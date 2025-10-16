function Book({book}){
    return (
        <div className="card">
        <img src={book.image} height="200" 
        width="200" alt="book image"/>
        <h3>Title:{book.title}</h3>
        <h4>Price:₹{book.price}</h4>
        <button>Add to cart</button>
        </div>
    )
}
export default Book;