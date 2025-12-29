import { useState } from 'react';
import { SearchBar } from '../components/SearchBar.jsx';
import { books } from '../../data/book.js';
import { useFilteredBooks } from '../hooks/useFilteredBooks.js';
import { BookResults } from '../components/BookResult.jsx';

export function Catalog() {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredBooks = useFilteredBooks(books, searchTerm);


  return (
    <div className="container mx-auto p-4 mt-20">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <h2 className="text-2xl font-bold mb-4">Catálogo de Libros</h2>
      <BookResults books={filteredBooks} searchTerm={searchTerm} />

    </div>
  );
}
