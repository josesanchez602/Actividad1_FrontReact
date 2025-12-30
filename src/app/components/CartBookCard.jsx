import { useCart } from "../context/CartContext";
import "../../styles/cartBookCard.css"
import CartBookAddButton from "./CartBookAddButton";
import CartBookRemoveButton from "./CartBookRemoveButton";
export default function CartBookCard({ book }) {
  const { addBook, removeBook } = useCart();

  return (
    <>
      <li className="cart__book" key={book.id}>
        <img src={book.cover} alt={book.title} className="book__image" />

        <div className="book__info">
          <p className="info__name">{book.title}</p>
          <p className="info__price">{book.price} €</p>
          <CartBookRemoveButton book={book}/>
          <a>{book.quantity} uds</a>
          <CartBookAddButton book={book}/>
        </div>
      </li>
    </>
  );
}
