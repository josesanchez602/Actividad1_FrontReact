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
  } = useCart();
  const navigate = useNavigate();

  const taxes = Number((totalprice * 0.1).toFixed(2));
  const subtotal = Number((totalprice - taxes).toFixed(2));
  const total = subtotal + taxes;

  const handlePay = () => {
    if (!cart.length) {
      alert('Tu carrito está vacío');
      navigate('/');
      return;
    }

    alert('✅ Tu pedido se ha realizado correctamente');
    clearCart();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full mx-auto px-4 md:px-0 py-8">
        {/* Cabecera: título + vaciar cesta */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Tu cesta
          </h1>
        </div>

        {/* Contenido principal: 2 columnas */}
        <div className="md:flex md:items-start md:gap-6">
          {/* COLUMNA IZQUIERDA – LISTA DE LIBROS */}
          <div className="md:w-7/12 space-y-4">
            {cart.length === 0 && (
              <p className="text-gray-400">
                Tu cesta está vacía. Añade algún libro para continuar.
              </p>
            )}

            {cart.map((book) => (
              <div
                key={book.id}
                className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
              >
                {/* Cabecera tipo “Enviado por…” */}
                <div className="px-4 py-2 text-xs text-gray-500 border-b border-gray-100">
                  Enviado por{' '}
                  <span className="text-emerald-700 font-semibold">
                    Librería Online
                  </span>
                </div>

                {/* Contenido principal del libro */}
                <div className="flex items-center gap-4 p-4">
                  {/* Portada */}
                  <div className="w-16 h-24 flex-shrink-0 bg-gray-50 border border-gray-200 rounded-md overflow-hidden flex items-center justify-center">
                    {book.image ? (
                      <img
                        src={book.image}
                        alt={book.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-xs text-gray-400 text-center px-1">
                        Portada no disponible
                      </span>
                    )}
                  </div>

                  {/* Datos libro */}
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 mb-1">
                      {book.author || 'Autor desconocido'}
                    </p>
                    <h3 className="text-sm font-semibold text-gray-800 leading-snug">
                      {book.title}
                    </h3>
                    {book.format && (
                      <p className="text-xs text-gray-500 mt-1">
                        {book.format}
                      </p>
                    )}

                    {/* Botón eliminar */}
                    <button
                      type="button"
                      onClick={() => removeBook(book)}
                      className="mt-3 flex items-center gap-1 text-xs text-gray-500 hover:text-red-500"
                    >
                      <span className="inline-flex w-3 h-3 border border-gray-400 rounded-sm items-center justify-center">
                        🗑
                      </span>
                      <span>Eliminar</span>
                    </button>
                  </div>

                  {/* Cantidad + precio */}
                  <div className="flex flex-col items-end gap-2">
                    <div className="inline-flex items-center border border-gray-300 rounded-md overflow-hidden">
                      <button
                        type="button"
                        onClick={() => removeBook(book)}
                        className="px-2 py-1 text-sm text-gray-600 hover:bg-gray-100"
                      >
                        −
                      </button>
                      <span className="px-3 py-1 text-sm text-gray-800">
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

                    <div className="text-sm font-semibold text-gray-800">
                      {(book.price * book.quantity).toFixed(2)} €
                    </div>
                  </div>
                </div>

                {/* Franja inferior tipo “Recíbelo entre…” */}
                <div className="px-4 py-2 border-t border-gray-100 bg-gray-50 text-xs text-gray-600 flex items-center justify-between">
                  <span>
                    Recíbelo en{' '}
                    <span className="font-semibold">2–4 días laborales</span>.
                  </span>
                  <span className="inline-flex items-center px-2 py-1 rounded-full bg-amber-100 text-amber-800 font-semibold text-[11px]">
                    Entrega estimada
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* COLUMNA DERECHA – RESUMEN DEL PEDIDO */}
          <div className="mt-8 md:mt-0 md:w-5/12">
            <div className="bg-white rounded-xl border border-gray-200 p-5 text-sm text-gray-800 mb-4">
              <h2 className="text-lg font-semibold mb-4">
                Resumen de tu pedido
              </h2>

              <div className="flex justify-between mb-2">
                <span className="text-gray-600">
                  Subtotal{' '}
                  <span className="text-xs text-gray-400">
                    ({totalItems} {totalItems === 1 ? 'producto' : 'productos'})
                  </span>
                </span>
                <span className="font-semibold">
                  {subtotal.toFixed(2)} €
                </span>
              </div>

              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="text-gray-600">
                    Gastos de envío{' '}
                    <span className="text-xs text-gray-400">(1 envío)</span>
                  </p>
                </div>
                <div className="text-right">
                  <p className="line-through text-xs text-gray-400">2,99 €</p>
                  <p className="text-emerald-600 font-semibold">Gratis</p>
                </div>
              </div>

              <hr className="my-3" />

              <div className="flex justify-between items-center mb-1">
                <p className="text-base font-semibold text-gray-700">
                  Total a pagar
                </p>
                <span className="text-xl font-bold">
                  {total.toFixed(2)} €
                </span>
              </div>
              <p className="text-xs text-pink-500">
                Ahorras {(totalprice - total).toFixed(2)} €
              </p>
            </div>

            {/* Código de descuento */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 text-sm text-gray-800 mb-4">
              <button
                type="button"
                className="w-full flex items-center justify-between text-left"
              >
                <span className="flex items-center gap-2">
                  <span className="inline-block w-4 h-4 border border-gray-400 rounded-sm" />
                  <span className="font-semibold text-gray-700">
                    ¿Tienes algún código de descuento?
                  </span>
                </span>
                <span className="text-gray-500 text-lg">⌄</span>
              </button>
            </div>

            {/* Botones de acción */}
            <button
              onClick={handlePay}
              className="w-full mb-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg py-3 text-sm font-semibold"
            >
              Continuar: envío y pago
            </button>

            <button className="w-full bg-black text-white rounded-lg py-3 text-sm font-semibold">
              Comprar con G&nbsp;Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
