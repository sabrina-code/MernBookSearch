import React from 'react';

class BookItem extends React.Component {
    render() {
        const { title, imageLinks, authors, publishedDate } = this.props.book.volumeInfo;
        return (
            <card className="d-flex flex-column ">
                <img className="card-img-top thumb"
                    alt={title}
                    src={
                        imageLinks === undefined
                            ? ""
                            : `${imageLinks.thumbnail}`
                    }
                />
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{authors}</p>
                <p className="mt-auto">{publishedDate}</p>
            </card >
        );
    }
}

export default BookItem;