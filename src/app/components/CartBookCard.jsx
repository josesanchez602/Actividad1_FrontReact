import { useState } from "react";

import { useCart } from "../context/CartContext";

import "../styles/cartBookCard.css";

export default function CartBookCard({ book }) {
  const { addBook, removeBook } = useCart();

  return (
    <>
      <li className="cart-item" key={book.id}>
        <img src={book.imageSrc} alt={book.title} className="cart-image" />

        <div className="cart-info">
          <p className="cart-name">{book.title}</p>
          <p className="cart-price">{book.price} €</p>
          <button
            className="cart-remove-button"
            onClick={() => removeBook(book)}
          >
            <i className="fa-solid fa-circle-minus"></i>
          </button>
          <a>{book.quantity} uds</a>
          <button className="cart-add-button" onClick={() => addBook(book)}>
            <i className="fa-solid fa-circle-plus"></i>
          </button>
        </div>
      </li>
    </>
  );
}
