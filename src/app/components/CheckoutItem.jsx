
import CartBookAddButton from "./CartBookAddButton";
import CartBookRemoveButton from "./CartBookRemoveButton";

export const CheckoutItem = ({ book, addBook, removeBook, removeAllBook }) => {
  return (
    <div className="checkout__item bg-white rounded-xl border border-gray-50 shadow-sm overflow-hidden">
      <div className="checkout__item-content flex items-center gap-4 p-4">
        <div className="checkout__cover w-16 h-24 shrink-0 bg-gray-50 border rounded-md overflow-hidden">
          {book.cover ? (
            <img
              src={book.cover}
              alt={book.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-xs text-gray-400 text-center px-1">
              Portada no disponible
            </span>
          )}
        </div>

        <div className="checkout__info flex-1">
          <p className="text-xs text-gray-500 mb-1">
            {book.author || 'Autor desconocido'}
          </p>
          <h3 className="text-sm font-semibold text-gray-800">
            {book.title}
          </h3>

          <button
            type="button"
            onClick={() => removeAllBook(book)}
            className="checkout__remove mt-3 flex items-center gap-1 text-xs text-gray-500"
          >
            <i className="fa-regular fa-trash-can" />
            <span>Eliminar</span>
          </button>
          
        </div>

        <div className="checkout__quantity flex flex-col items-end gap-2">
          <div className="inline-flex items-center border rounded-md overflow-hidden">
            {/*<button
              type="button"
              onClick={() => removeBook(book)}
              className="px-2 py-1 text-sm text-gray-600 hover:bg-gray-100"
            >
              −
            </button>*/}
            <CartBookRemoveButton book={book} />
            <span className="px-3 py-1 text-sm">
              {book.quantity}
            </span>
            {/*<button
              type="button"
              onClick={() => addBook(book)}
              className="px-2 py-1 text-sm text-gray-600 hover:bg-gray-100"
            >
              +
            </button>*/}
            <CartBookAddButton book={book} />
          </div>

          <div className="text-sm font-semibold">
            {(book.price * book.quantity).toFixed(2)} €
          </div>
        </div>
      </div>
    </div>
  );
};
