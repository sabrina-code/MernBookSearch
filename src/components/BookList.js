import React from 'react';
import BookItem from './BookItem';

const BookList = ({ books, onBookSelect }) => {
    const RenderedBooks = books.map(book => {
        return <BookItem onBookSelect={onBookSelect} key={book.id} book={book} />
    });
    return (
        <div className="table col-7">
            <ul className="horizontal-list ">
                <li className="table">{RenderedBooks}</li>
            </ul>
        </div>

    )

};

export default BookList;

/* pre destructure:
const books = props.books.map((book) => {
    return <img key={book.id} alt={book.volumeInfo.title} src={book.volumeInfo.imageLinks.thumbnail} />
}); */
/* destructure:
const books = props.books.map(({id, volumeInfo}) => {
        return <img key={id} alt={volumeInfo.title} src={volumeInfo.imageLinks.thumbnail} />
    });
*/