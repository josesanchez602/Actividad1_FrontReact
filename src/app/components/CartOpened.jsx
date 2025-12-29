import { useCart } from "../context/CartContext.jsx";
import '../../styles/cartDropdown.css'
import CartBookCard from "./CartBookCard.jsx"

export default function CartOpened({open}) {

  const { cart, addBook, removeBook,totalprice } = useCart();
  
 return (
<>
 
      {/* DESPLEGABLE */}
{open && (
  <div className="cart-dropdown">
    <h3 className="cart-title">Carrito</h3>

    {cart.length === 0 ? (
      <p className="cart-empty">El carrito está vacío</p>
    ) : (
      <ul className="cart-list-scroll">
        {cart.map((book) => (
          
          <CartBookCard book={book} key={book.id}/>
        ))}
      </ul>
    )}
    
    <p>TOTAL: {totalprice}€ </p>
    {cart.length > 0 && (
      <button className="cart-view-btn">Ver carrito</button>
    )}
  </div>
)}
    </>
  
  );
  
}
