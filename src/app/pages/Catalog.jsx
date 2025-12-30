import { books } from '../../data/book.js';
import { useFilteredBooks } from '../hooks/useFilteredBooks.js';
import { BookResults } from '../components/BookResult.jsx';
import { useSearch } from '../context/SearchContext'; // Importa el hook
export function Catalog() {

  const { searchTerm } = useSearch(); // Obtiene el término global
  const filteredBooks = useFilteredBooks(books, searchTerm);

  return (
    <div className="container mx-auto p-4 mt-20">

      <h2 className="text-2xl font-bold mb-4 text-center">Catálogo de Libros</h2>
      <BookResults books={filteredBooks} searchTerm={searchTerm} />
    </div>
  );
}
