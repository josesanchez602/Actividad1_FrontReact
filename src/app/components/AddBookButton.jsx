import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "../../styles/AddBookButtonStyle.css";

export function AddBookButton({book}) {
    const { addBook } = useCart();

    return (
        <button
          className="bookv-detail__button--cart"
          onClick={() => addBook(book)}>
            Añadir al carrito
        </button>
    );

}