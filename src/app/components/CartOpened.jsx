import { useCart } from "../context/CartContext.jsx";
import '../../styles/cartDropdown.css'
import CartBookCard from "./CartBookCard.jsx"

export default function CartOpened({open}) {

  const { cart, addBook, removeBook,totalprice } = useCart();
  
 return (
<>
 
      {/* DESPLEGABLE */}
{open && (
  <div className="cart__dropdown">
    <h3 className="cart__title">Carrito</h3>

    {cart.length === 0 ? (
      <p className="cart__empty">El carrito está vacío</p>
    ) : (
      <ul className="cart__list-scroll">
        {cart.map((book) => (
          
          <CartBookCard book={book} key={book.id}/>
        ))}
      </ul>
    )}
    
    <p className="cart__totalprice">TOTAL: {totalprice}€ </p>
    {cart.length > 0 && (
      <button className="cart__view-btn">Ver carrito</button>
    )}
  </div>
)}
    </>
  
  );
  
}
