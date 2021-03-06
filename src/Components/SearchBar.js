import './SearchBar.css'
import React from 'react'

class SearchBar extends React.Component {
    state = { term: '' }

    onFormSubmit = (event) =>{
        event.preventDefault();
    
        this.props.onSearchSubmit(this.state.term);

    }
    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label htmlFor="search">Video Search</label>
                        <input type="text"
                            id="search"
                            value={this.state.term}
                            onChange={(e) => this.setState({term: e.target.value})}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;