import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { AddBookButton } from "./AddBookButton";
import "../../styles/BookCard.css";

export function BookCard( {book} ) {
    const { addBook } = useCart();
    const navigate = useNavigate();

    return (
        <div className="BookCard__box">
            <img src={book.cover} alt={book.title} className="BookCard__cover"/>
            <div className="BookCard__description">
                <button className="BookCard__title" onClick={ () => navigate(`/books/${book.id}`) }>{book.title}</button>
                <p className="BookCard__author">by {book.author}</p>
                <div className="BookCard__actions">
                    <AddBookButton book= {book}/>
                </div>
            </div>
        </div>
    );

}