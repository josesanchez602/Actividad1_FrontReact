import { BookGrid } from "../components/BookGrid.jsx";
import { books } from "../../data/book.js";

export function Catalog() {
    return (
    <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4 mt-4">Catálogo de Libros</h2>
        <BookGrid books={books} />
    </div>
    );
}