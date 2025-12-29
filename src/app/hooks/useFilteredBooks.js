import { useMemo } from 'react';

export function useFilteredBooks(books, searchTerm) {
  const filteredBooks = useMemo(() => {
    const term = searchTerm.toLowerCase();

    return books.filter((book) =>
      book.title.toLowerCase().includes(term) 

    );
  }, [books, searchTerm]);

  return filteredBooks;
}
