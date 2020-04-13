import React from 'react';

const BookList = props => {
    const books = props.books.map((book) => {
        return <img alt={book.volumeInfo.title} src={book.volumeInfo.imageLinks.thumbnail} />
    });
    return <div>{books}</div>;
};

export default BookList;