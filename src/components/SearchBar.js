import React from 'react';
import './style.css';

class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = event => {
        event.preventDefault();
        // console.log(this.state.term);
        this.props.onSubmit(this.state.term); //passing down props.onSubmit from App
    };

    render() {
        return (
            <div className="searcharea container">
                <form onSubmit={this.onFormSubmit} className="searchForm">
                    <label>Book search</label>
                    <input
                        type="text"
                        value={this.state.term}
                        onChange={e => this.setState({ term: e.target.value })}
                    />
                    <button type="submit" >Search</button>
                </form>
            </div>
        )
    }
}

export default SearchBar;

//input(onChange) -> onInputChange(e)
//84