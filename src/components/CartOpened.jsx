
import { useState } from "react";

/*
<li className="cart-item" key={book.id}>
            <img
              src={book.imageSrc}
              alt={book.title}
              className="cart-image"
            />

            <div className="cart-info">
              <p className="cart-name">{book.title}</p>
              <p className="cart-price">
                {book.price} € 
              </p>
              <button onClick={() => removeBook(book)}>-</button>
              <a>{book.quantity} uds</a>
              <button onClick={() => addBook(book)}>+</button>
            </div>
          </li> 
 */

import { useCart } from "../context/CartContext";

import '../styles/cartDropdown.css'
import CartBookCard from "./CartBookCard.jsx"

export default function CartOpened({open}) {

  const { cart,addBook, removeBook,totalprice } = useCart();
  
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
