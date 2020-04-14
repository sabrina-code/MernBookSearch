import React from 'react';
import book from '../api/book';
import SearchBar from './SearchBar';
import BookList from './BookList'


const KEY = 'AIzaSyBYlDujBqXB32sgbb43_HCVYNHm7SC5qjk';

class App extends React.Component {
    state = { books: [] };

    componentDidMount() {
        this.onSearchSubmit('flowers');
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

    render() {
        return (
            <div>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <BookList books={this.state.books} />
            </div>
        );
    }
}

export default App;
//ENABLE api