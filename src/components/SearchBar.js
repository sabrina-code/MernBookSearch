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
            <div className="container col-md-6">
                <form onSubmit={this.onFormSubmit} className="searchForm">
                    <label>Book Search</label>
                    <div className="searcharea">
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
