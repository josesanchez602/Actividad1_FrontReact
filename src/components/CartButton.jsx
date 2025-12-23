import { useState } from "react";

import CartOpened from "./CartOpened.jsx"
import { useCart } from "../context/CartContext";

import "../styles/cartButton.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function CartButton() {
  const [open, setOpen] = useState(false);
  const { cart,  totalItems } = useCart();
  return (
    <>
      {open && <div className="cart-overlay" onClick={() => setOpen(false)} />}

      <div className="cart-container">
        {/* BOTÓN CARRITO */}
        <button className="cart-button" onClick={() => setOpen(!open)}>
          <i className="fas fa-shopping-cart"></i>
          {cart.length > 0 && <span className="cart-badge">{totalItems}</span>}
        </button>
        {/*Desplegable boton abierto*/}
        <CartOpened open={open}/>
      </div>
      
    </>
  );
}
