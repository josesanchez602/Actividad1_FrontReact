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
        if(exists.quantity !== 1){
          return prev.map((b) =>
            b.id === book.id ? { ...b, quantity: b.quantity - 1 } : b
          );
        }else{
          return prev.filter((b) => b.id !== book.id);
          
        }
    });
  };

  const removeAllBook = (book)=> {
    setCart((prev) =>{
      return prev.filter((b) => b.id !== book.id);
    });
  };
  const clearCart = () => setCart([]);

  //se cuentan todos los libros + las cantidades de cada uno
  const totalItems = cart.reduce((acc, b) => acc + b.quantity, 0); 

  const totalprice = Number(cart.reduce( (total,b) =>  total + b.quantity*b.price,0).toFixed(2));

  return (
    <CartContext.Provider value={{cart,addBook,removeBook,clearCart,totalItems,totalprice,removeAllBook}}>
      {children}
    </CartContext.Provider>
  );

};

export const useCart = () => useContext(CartContext);
