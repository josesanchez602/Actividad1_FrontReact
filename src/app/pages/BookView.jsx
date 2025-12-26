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
  <div className="book-container">
    <div className="book-detail">
      {/* Imagen y valoración */}
      <div className="book-detail__image">
        <img
          src={book.cover}
          alt={book.title}
          className="book-detail__cover"
        />
        <h3 className="book-detail__score">Score ★★★★☆</h3>
      </div>

      {/* Información del libro */}
      <div className="book-detail__info">
        <h1 className="book-detail__title">{book.title}</h1>
        <h3 className="book-detail__author">Autor: {book.author}</h3>
        <h3 className="book-detail__genre">Género: {book.genre}</h3>
        <p className="book-detail__price">Precio: ${book.price.toFixed(2)}</p>
        <button
          className="book-detail__button--cart"
          onClick={() =>
            add({ id: book.id, title: book.title, price: book.price, cover: book.cover })
          }
        >
          Añadir al carrito
        </button>
      </div>
    </div>

    {/* Descripción */}
    <div className="book-description">
      <p className="book-description__text">
        {book.description || "Descripción no disponible."}
      </p>
    </div>
  </div>
  );
};
