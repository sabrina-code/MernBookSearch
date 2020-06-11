import React from 'react';
import BookItem from './BookItem';

const BookList = ({ books, onBookSelect }) => {
    const RenderedBooks = books.map(book => {
        return <BookItem onBookSelect={onBookSelect} key={book.id} book={book} />
    });
    return (
        <div className="table col-md-7 col-sm-10">
            <div className="horizontal-list ">
                {RenderedBooks}
            </div>
        </div>
    )
};

export default BookList;
