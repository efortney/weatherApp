// search bar component for app. Allows a user to search for a desired city 
import React , {Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term : ''}
    }

    
    render() {
        return (
            <div className="searchBar">
                <input value = {this.state.term} className="search" placeholder="Kansas City, Mo"
                onChange= {event => this.onInputChange(event.target.value)}
                />
            </div>
        )
    }

    // split the string on a comma to allow the user to search for cities in a english like fashion 
    parseString(term) { 
        var results = term.split(",")
        return results;
    }

    // changes the search term based on the city  
    onInputChange(term) {
        let results = this.parseString(term)
        this.setState({term});
        this.props.onSearchTermChange(results[1],results[0]);
    }
   
}


export default SearchBar;