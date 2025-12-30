import { BookGrid } from './BookGrid.jsx';
import '../../styles/book-results.css';

export function BookResults({ books, searchTerm }) {
  if (books.length === 0) {
    return (
      <p className="book-results__empty">
        No se encontraron libros con "{searchTerm}"
      </p>
    );
  }

  return (
    <div className="book-results">
      <BookGrid books={books} />
    </div>
  );
}
