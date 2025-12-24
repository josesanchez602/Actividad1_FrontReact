import { useParams } from 'react-router-dom';
import { books } from '../../data/books.js';
import { useCart } from '../hooks/useCart.js';

//TODO opiniones 

export const BookDetail = () => {
  //Obtener el id de la URL
  const { id } = useParams();
  const { add } = useCart();

  //Buscar el libro correspondiente
  const book = books.find((b) => b.id === id);

  //Manejar caso de libro no encontrado
  if (!book) {
    return <div className="container">Libro no encontrado</div>;
  }

  //Renderizar la vista expandida
  return (
    <div className='block w-300 h-2/3 '>
      <div className="book-detail flex border rounded-md shadow-sm bg-white text-black p-4 mx-auto">
        {/* Imagen y valoracion */}
        <div className='block w-1/2'>
          <img
            src={book.cover}
            alt={book.title}
            className='object-cover rounded-md w-full h-96'
          />
          <h3 >Score ★★★★☆</h3>
        </div>

        {/* Información del libro */}
        <div className='ml-4 block w-1/2 text-start' >
          <h1 className='text-2xl font-bold mb-2'>{book.title}</h1>
          <h3 className='mb-1'>Autor: {book.author}</h3>
          <h3 className='mb-1'>Género: {book.genre}</h3>
          <p className='mb-3 font-semibold'>Precio: ${book.price.toFixed(2)}</p>
          <button
            className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 "
            onClick={() =>
              add({ id: book.id, title: book.title, price: book.price, cover: book.cover })
            }
          >
            Añadir al carrito
          </button>
        </div>
      </div>

      {/* Descripción */}
      <div className="book-detail flex border rounded-md shadow-sm bg-white text-black p-4 mx-auto">
        <p className="text-gray-700">
          {book.description || "Descripción no disponible."}
        </p>
      </div>
    </div>
    );
  };
