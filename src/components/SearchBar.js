import React from 'react';

class SearchBar extends React.Component {
    render() {
        return (
            <div className="searcharea">
                <form className="searchForm" onSubmit="">
                    <label>Enter a book to search</label>
                    <input type="text" value="" onChange="" />
                </form>
            </div>
        )
    }
}

export default SearchBar;