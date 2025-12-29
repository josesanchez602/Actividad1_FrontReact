import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "../../styles/BookCard.css";

export function BookCard( {book} ) {
    const { addBook } = useCart();
    const navigate = useNavigate();

    return (
        <div className="book-cart-box">
            <img src={book.cover} alt={book.title} className="img-cover"/>
            <div className="book-description">
                <button className="book-title" onClick={ () => navigate(`/books/${book.id}`) }>{book.title}</button>
                <p className="book-author">by {book.author}</p>
                <div className="book-buttons">
                    <button className="button-add"
                        onClick={() => addBook(book)}>Añadir ${book.price.toFixed(2)}
                    </button>
                </div>
            </div>
        </div>
    );

}