import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

const KEY = 'AIzaSyBYlDujBqXB32sgbb43_HCVYNHm7SC5qjk';

class App extends React.Component {
    state = { books: [] };

    onSearchSubmit = async term => {
        const response = await axios.get('https://www.googleapis.com/books/v1/volumes', {
            params: {
                q: term,
                key: KEY,
                maxResults: 20
            }
        });
        this.setState({ books: response.data.results });
    }

    render() {
        return (
            <div className="" >
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
}

export default App;
//ENABLE api