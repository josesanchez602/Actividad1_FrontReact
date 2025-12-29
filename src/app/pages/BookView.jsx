import { useParams } from 'react-router-dom';
import { books } from "../../data/book.js";
import { useCart } from '../hooks/useCart.js';
import "../../styles/BookView.css";
//TODO opiniones 

export const BookDetail = () => {
  //Obtener el id de la URL
  const { id } = useParams();
  const { addBook } = useCart();

  //Buscar el libro correspondiente
  const book = books.find((b) => b.id === id);

  //Manejar caso de libro no encontrado
  if (!book) {
    return <div className="container">Libro no encontrado</div>;
  }

  //Renderizar la vista expandida
return (
  <div className="bookv-container">
    <div className="bookv-detail">
      {/* Imagen y valoración */}
      <div className="bookv-detail__image">
        <img
          src={book.cover}
          alt={book.title}
          className="bookv-detail__cover"
        />
        <h3 className="bookv-detail__score">Score ★★★★☆</h3>
      </div>

      {/* Información del libro */}
      <div className="bookv-detail__info">
        <h1 className="bookv-detail__title">{book.title}</h1>
        <h3 className="bookv-detail__author">Autor: {book.author}</h3>
        <h3 className="bookv-detail__genre">Género: {book.genre}</h3>
        <p className="bookv-detail__price">Precio: ${book.price.toFixed(2)}</p>
        <button
          className="bookv-detail__button--cart bg-gray-500"
          onClick={() => addBook(book)}>
            Añadir al carrito
        </button>
      </div>
    </div>

    {/* Descripción */}
    <div className="bookv-description">
      <p className="bookv-description__text">
        {book.description || "Descripción no disponible."}
      </p>
    </div>
  </div>
  );
};