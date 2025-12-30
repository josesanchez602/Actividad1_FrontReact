export const CheckoutSummary = ({
  subtotal,
  taxes,
  total,
  totalItems,
  isDisabled,
  onPay,
}) => {
  
  return (
    <aside className="checkout__summary mt-8 md:mt-0 md:w-5/12">
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
          <span className="text-xl font-bold">{total.toFixed(2)} €</span>
        </div>
      </div>

      <button
        disabled={isDisabled}
        onClick={onPay}
        className={`BookCard__add ${
          isDisabled ? 'BookCard__add--disabled' : ''
        }`}
      >
        Continuar: envío y pago
      </button>
    </aside>
  );
};

