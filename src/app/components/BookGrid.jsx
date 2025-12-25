import { BookCart } from "./BookCart.jsx";

export function BookGrid( { books } ) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {books.map((b) =>
                <div>
                    <BookCart book={b} />
                </div>)}
        </div>
    );
}