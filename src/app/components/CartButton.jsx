import { useState } from "react";
import CartOpened from "./CartOpened.jsx"
import { useCart } from "../context/CartContext.jsx";

import "../../styles/cartButton.css";

export default function CartButton() {
  const [open, setOpen] = useState(false);
  const { cart,  totalItems } = useCart();
  return (
    <>
      {open && <div className="cart__overlay" onClick={() => setOpen(false)} />}

      <div className="cart__container">
        {/* BOTÓN CARRITO */}
        <button className="cart__button" onClick={() => setOpen(!open)}>
          <i className="fa-solid fa-cart-shopping"></i>
          {cart.length > 0 && <span className="cart__badge">{totalItems}</span>}
        </button>
        {/*Desplegable boton abierto*/}
        <CartOpened open={open}/>
      </div>
      
    </>
  );
}
