import React from 'react';

const BookDetail = ({ book }) => {
    if (!book) {
        return <div>Select a book...</div>
    }
    return (
        <div className="bookdetail col-4">
            <h4>{book.volumeInfo.title}</h4>
            <p>{book.volumeInfo.description}</p>
            <p>{book.volumeInfo.authors}</p>
            <p>{book.volumeInfo.publishedDate}</p>
            <img className="card-img-top "
                alt={book.title}
                src={
                    book.volumeInfo.imageLinks === undefined ? "" : `${book.volumeInfo.imageLinks.thumbnail}`
                }
            />

        </div>
    )
};

export default BookDetail;