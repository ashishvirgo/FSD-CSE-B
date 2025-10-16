function Book(props){
return (
    <div className="card">
        <img src={props.image} width="150" height="150" alt="book"/>
        <h4>Price:{props.price}/-</h4>
    </div>
)
}
export default Book;