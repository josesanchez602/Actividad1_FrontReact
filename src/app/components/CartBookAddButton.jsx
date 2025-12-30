import { useState } from "react";
import CartOpened from "./CartOpened.jsx"
import { useCart } from "../context/CartContext.jsx";


import "../../styles/cartButton.css";

export default function CartBookAddButton({book}) {
 
  const {addBook } = useCart();
  return (
    <button className="info__add-button" onClick={() => addBook(book)}>
      <i className="fa-solid fa-circle-plus"></i>
    </button>
  );
}