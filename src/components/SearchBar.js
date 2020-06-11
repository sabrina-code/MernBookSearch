import React from 'react';
import './style.css';

class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.term); //passing down props.onSubmit from App
    };

    render() {
        return (
            <div className="container col-md-6">
                <form onSubmit={this.onFormSubmit} className="searchForm">
                    <div className="searcharea">
                        <label className="app-name">Book Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value })}
                        />
                        <button type="submit" >Search</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;
