import { BookCard } from "./BookCard.jsx";

export function BookGrid( { books } ) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {books.map((b) =>
                <div key={ b.id }>
                    <BookCard book={b}/>
                </div>)}
        </div>
    );
}