import { useCart } from "../context/CartContext";
import "../../styles/cartBookCard.css"

export default function CartBookCard({ book }) {
  const { addBook, removeBook } = useCart();

  return (
    <>
      <li className="cart__book" key={book.id}>
        <img src={book.cover} alt={book.title} className="book__image" />

        <div className="book__info">
          <p className="info__name">{book.title}</p>
          <p className="info__price">{book.price} €</p>
          <button
            className="info__remove-button"
            onClick={() => removeBook(book)}
          >
            <i className="fa-solid fa-circle-minus"></i>
          </button>
          <a>{book.quantity} uds</a>
          <button className="info__add-button" onClick={() => addBook(book)}>
            <i className="fa-solid fa-circle-plus"></i>
          </button>
        </div>
      </li>
    </>
  );
}
