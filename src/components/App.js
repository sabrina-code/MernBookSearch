import React from 'react';
import book from '../api/book';
import SearchBar from './SearchBar';
import BookList from './BookList'
import BookDetail from './BookDetail'


const KEY = 'AIzaSyBYlDujBqXB32sgbb43_HCVYNHm7SC5qjk';

class App extends React.Component {
    state = { books: [], selectedBook: null };

    componentDidMount() {
        this.onSearchSubmit('');
    }

    onSearchSubmit = async term => {
        const response = await book.get('/volumes', {
            params: {
                q: term,
                key: KEY,
                maxResults: 40
            }
        });
        this.setState({ books: response.data.items });
    }

    onBookSelect = book => {
        // console.log('From the App', book);
        this.setState({ selectedBook: book });
    };

    render() {
        return (
            <div className="bg">
                <SearchBar onSubmit={this.onSearchSubmit} />
                <BookDetail book={this.state.selectedBook} />
                <BookList onBookSelect={this.onBookSelect} books={this.state.books} />
            </div>
        );
    }
}

export default App;
//ENABLE api