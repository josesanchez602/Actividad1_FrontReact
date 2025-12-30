import { CheckoutItem } from './CheckoutItem';

export const CheckoutList = ({ cart, addBook, removeBook,removeAllBook }) => {
  return (
    <div className="checkout__list md:w-7/12 space-y-4">
      {cart.length === 0 && (
        <p className="checkout__empty text-gray-400">
          Tu cesta está vacía. Añade algún libro para continuar.
        </p>
      )}

      {cart.map((book) => (
        <CheckoutItem
          key={book.id}
          book={book}
          addBook={addBook}
          removeBook={removeBook}
          removeAllBook={removeAllBook}
        />
      ))}
    </div>
  );
};
