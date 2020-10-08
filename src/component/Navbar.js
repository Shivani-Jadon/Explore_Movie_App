import React from 'react';
import { handleMovieSearch } from '../action';

class Navbar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            showSearchResults : true,
            searchText : ''
        }
    }

    handleSearch = () => {
        const { searchText } = this.state;

        this.props.dispatch(handleMovieSearch(searchText));
    }

    render(){
        return (
            <div  className='nav' >
                <div className='search-container' >
                    <input type='text' />
                </div>
                <button id='search-btn' onClick={this.handleSearch} >Search</button>
            </div>
        )
    }
}

export default Navbar;