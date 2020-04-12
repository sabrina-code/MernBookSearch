import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = event => {
        event.preventDefault();
        console.log(this.state.term);
    };

    render() {
        return (
            <div className="searcharea">
                <form onSubmit={this.onFormSubmit} className="searchForm">
                    <label>Book search</label>
                    <input
                        type="text"
                        value={this.state.term}
                        onChange={e => this.setState({ term: e.target.value })}
                    />
                </form>
            </div>
        )
    }
}

export default SearchBar;

//input(onChange) -> onInputChange(e)
//84