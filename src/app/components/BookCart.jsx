import { useCart } from "../hooks/useCart.js";

export function BookCart( {book} ) {
    const { cart,addBook,removeBook,clearCart,totalItems,totalprice } = useCart();

    return (
        <div> 
            <image>
                src={book.cover}
                alt={book.title}
            </image>
            <div>
                <h3>{book.title}</h3>
                <p>by {book.author}</p>
                <div className="mt-2 flex items-center justify-between">
                    <span className="font-bold">${book.price.toFixed(2)}</span>
                    <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                        onClick={() => addBook({ book })}>Añadir al carrito
                    </button>
                </div>
            </div>
        </div>
    );

}