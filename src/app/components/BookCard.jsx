import { useCart } from '../hooks/useCart.js';

export function BookCard({ book }) {
  const { add } = useCart();

  return (
    <div className="book-card border rounded-md overflow-hidden shadow-sm bg-white">
      <img
        src={book.cover}
        alt={book.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-3">
        <h3 className="font-semibold text-lg">{book.title}</h3>
        <p className="text-sm text-gray-600">{book.author}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="font-bold">${book.price.toFixed(2)}</span>
          <button
            className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() =>
              add({ id: book.id, title: book.title, price: book.price, cover: book.cover })
            }
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
}
