import { useCart } from "../hooks/useCart.js";
import { useNavigate } from "react-router-dom";
import "../../styles/BookCart.css";

export function BookCart( {book} ) {
    const { cart,addBook,removeBook,clearCart,totalItems,totalprice } = useCart();
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
                    <button className="button-remove"
                        onClick={() => removeBook(book)}>Eliminar
                    </button>
                </div>
            </div>
        </div>
    );

}