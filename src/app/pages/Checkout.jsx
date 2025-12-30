import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { CheckoutList } from "../components/CheckoutList";
import { CheckoutSummary } from '../components/CheckoutSummary';


export const Checkout = () => {
  const {
    cart,
    totalprice,
    clearCart,
    addBook,
    removeBook,
    totalItems,
    removeAllBook,
  } = useCart();
  const navigate = useNavigate();

  const taxes = Number((totalprice * 0.1).toFixed(2));
  const subtotal = Number((totalprice - taxes).toFixed(2));
  const isDisabled = cart.length === 0;

  const handlePay = () => {
    if (!cart.length) {
      alert("Tu carrito está vacío");
      return;
    }

    alert("Tu pedido se ha realizado correctamente");
    clearCart();
    navigate("/catalog", { replace: true });
  };

  return (
    <div className="Checkout w-full max-w-7xl mx-auto px-6 mt-20">
      <h2 className="Checkout__title text-2xl font-bold mb-4 text-start">
        Tu cesta
      </h2>

      <div className="Checkout__content md:flex md:items-start md:gap-6">
        <CheckoutList 
          cart={cart} 
          addBook={addBook} 
          removeBook={removeBook} 
          removeAllBook={ removeAllBook }
        />

        <CheckoutSummary
          subtotal={subtotal}
          taxes={taxes}
          total={totalprice}
          totalItems={totalItems}
          isDisabled={isDisabled}
          onPay={handlePay}
        />
      </div>
    </div>
  );
};
