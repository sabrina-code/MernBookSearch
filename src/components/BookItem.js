import React from 'react';

const BookItem = ({ book, onBookSelect }) => {
    return (
        <div onClick={() => onBookSelect(book)} className="d-flex flex-column card">
            <img className="thumb"
                alt={book.title}
                src={
                    book.volumeInfo.imageLinks === undefined ? "" : `${book.volumeInfo.imageLinks.thumbnail}`
                }
            />
            <h5 className="card-title">{book.volumeInfo.title}</h5>
            <p className="card-text">{book.volumeInfo.authors}</p>
            <p className="mt-auto">{book.volumeInfo.publishedDate}</p>
        </div >
    );
};


export default BookItem;