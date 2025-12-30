import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export const Checkout = () => {
  const {
    cart,
    totalprice,
    clearCart,
    addBook,
    removeBook,
    totalItems,
    removeAllBook
  } = useCart();
  const navigate = useNavigate();

  const taxes = Number((totalprice * 0.1).toFixed(2));
  const subtotal = Number((totalprice - taxes).toFixed(2));
  const isDisabled = cart.length === 0;

  const handlePay = () => {
    if (!cart.length) {
      alert('Tu carrito está vacío');
      return;
    }

    alert('Tu pedido se ha realizado correctamente');
    clearCart();
    navigate('/catalog', { replace: true });
  };

  return (
    <div className="Checkout w-full max-w-7xl mx-auto px-6 mt-20">
      <h2 className="Checkout__title text-2xl font-bold mb-4 text-start">Tu cesta</h2>

      <div className="Checkout__content md:flex md:items-start md:gap-6">
        {/* Lista */}
        <div className="Checkout__list md:w-7/12 space-y-4">
          {cart.length === 0 && (
            <p className="Checkout__empty text-gray-400">
              Tu cesta está vacía. Añade algún libro para continuar.
            </p>
          )}

          {cart.map((book) => (
            <div
              key={book.id}
              className="Checkout__item bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
            >
              <div className="Checkout__item-content flex items-center gap-4 p-4">
                <div className="Checkout__cover w-16 h-24 shrink-0 bg-gray-50 border rounded-md overflow-hidden">
                  {book.cover ? (
                    <img src={book.cover} alt={book.title} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-xs text-gray-400 text-center px-1">
                      Portada no disponible
                    </span>
                  )}
                </div>

                <div className="Checkout__info flex-1">
                  <p className="text-xs text-gray-500 mb-1">
                    {book.author || 'Autor desconocido'}
                  </p>
                  <h3 className="text-sm font-semibold text-gray-800">
                    {book.title}
                  </h3>

                  <button
                    type="button"
                    onClick={() => removeAllBook(book)}
                    className="Checkout__remove mt-3 flex items-center gap-1 text-xs text-gray-500"
                  >
                    <i className="fa-regular fa-trash-can" />
                    <span>Eliminar</span>
                  </button>
                </div>

                <div className="Checkout__quantity flex flex-col items-end gap-2">
                  <div className="inline-flex items-center border rounded-md overflow-hidden">
                    <button
                      type="button"
                      onClick={() => removeBook(book)}
                      className="px-2 py-1 text-sm text-gray-600 hover:bg-gray-100"
                    >
                      −
                    </button>
                    <span className="px-3 py-1 text-sm">
                      {book.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => addBook(book)}
                      className="px-2 py-1 text-sm text-gray-600 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>

                  <div className="text-sm font-semibold">
                    {(book.price * book.quantity).toFixed(2)} €
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Resumen */}
        <aside className="Checkout__summary mt-8 md:mt-0 md:w-5/12">
          <div className="bg-white rounded-xl border p-5 text-sm mb-4">
            <h2 className="text-lg font-semibold mb-4">
              Resumen de tu pedido
            </h2>

            <div className="flex justify-between mb-2">
              <span>
                Subtotal
                <span className="text-xs text-gray-400">
                  ({totalItems} {totalItems === 1 ? 'producto' : 'productos'})
                </span>
              </span>
              <span className="font-semibold">{subtotal.toFixed(2)} €</span>
            </div>

            <div className="flex justify-between mb-2">
              <span>Impuestos</span>
              <span className="font-semibold">{taxes.toFixed(2)} €</span>
            </div>

            <hr className="my-3" />

            <div className="flex justify-between items-center">
              <p className="text-base font-semibold">Total a pagar</p>
              <span className="text-xl font-bold">
                {totalprice.toFixed(2)} €
              </span>
            </div>
          </div>

          <button
            disabled={isDisabled}
            onClick={handlePay}
            className={`BookCard__add ${
              isDisabled ? 'BookCard__add--disabled' : ''
            }`}
          >
            Continuar: envío y pago
          </button>
        </aside>
      </div>
    </div>
  );
};
