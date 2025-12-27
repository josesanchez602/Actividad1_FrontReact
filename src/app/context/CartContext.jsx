import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  /*
    Añadir un libro al Carrito.
    Si ya está, suma 1 a quantity
    Si no está, lo añade con un nuevo campo "quantity" en 1
  */
  const addBook = (book) => {
    setCart((prev) => {
      const exists = prev.find((b) => b.id === book.id);
      if (exists) {
        
        return prev.map((b) =>
          b.id === book.id ? { ...b, quantity: b.quantity + 1 } : b
        );
      } else {
        return [...prev, { ...book, quantity: 1 }];
      }
    });
  };

  /*
  Quita el libro del carrito, de momento lo quita entero 
  sin importar la cantidad de ese libro
   */
  const removeBook = (book) => {
    setCart((prev) => {
      const exists = prev.find((b) => b.id === book.id);

      // Si el libro no está en el carrito, no hacer nada
      if (!exists) return prev;

      // Si hay más de una unidad, decrementa
      if (exists.quantity > 1) {
        return prev.map((b) =>
          b.id === book.id ? { ...b, quantity: b.quantity - 1 } : b
        );
      }

      // Si la cantidad es 0 o negativa, no hacer nada
      if (exists.quantity <= 0) {
        return prev;
      }

      // Si solo hay una unidad, elimina el libro del carrito
      return prev.filter((b) => b.id !== book.id);
    });
  };

  const clearCart = () => setCart([]);

  //se cuentan todos los libros + las cantidades de cada uno
  const totalItems = cart.reduce((acc, b) => acc + b.quantity, 0); 

  const totalprice = Number(cart.reduce( (total,b) =>  total + b.quantity*b.price,0).toFixed(2));

  return (
    <CartContext.Provider value={{cart,addBook,removeBook,clearCart,totalItems,totalprice}}>
      {children}
    </CartContext.Provider>
  );

};


export function useCartContext() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCartContext must be used within CartProvider');
  return ctx;
}
