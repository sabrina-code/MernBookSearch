import React from 'react';
import BookItem from './BookItem';

const BookList = props => {
    const books = props.books.map(book => {
        return <BookItem key={book.id} book={book} />
    });
    return <div className="thumblist">{books}</div>

};

export default BookList;

/* pre destructure:
const books = props.books.map((book) => {
    return <img key={book.id} alt={book.volumeInfo.title} src={book.volumeInfo.imageLinks.thumbnail} />
}); */
/* destructure:
const books = props.books.map(({ id, volumeInfo }) => {
        return <img key={id} alt={volumeInfo.title} src={volumeInfo.imageLinks.thumbnail} />
    });
*/