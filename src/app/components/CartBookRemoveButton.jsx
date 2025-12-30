import { useState } from "react";
import CartOpened from "./CartOpened.jsx";
import { useCart } from "../context/CartContext.jsx";

import "../../styles/cartButton.css";

export default function CartBookRemoveButton({ book }) {
  const { removeBook } = useCart();
  return (
    <button className="info__remove-button" onClick={() => removeBook(book)}>
      <i className="fa-solid fa-circle-minus"></i>
    </button>
  );
}
