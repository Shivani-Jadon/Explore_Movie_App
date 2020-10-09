import React from 'react';
// import { data } from '../data';
import { addMovieToList, handleMovieSearch } from '../action';

class Navbar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            searchText : ''
        }
    }

    handleSearch = () => {
        const { searchText } = this.state;

        this.props.dispatch( handleMovieSearch(searchText) );
    }

    handleChange = (e) => {
        this.setState({
            searchText : e.target.value
        })
    }

    handleAddMovie = (movie) => {

        console.log("Adding movie ", movie);
        this.props.dispatch(addMovieToList(movie));
        // this.setState({
        //     showSearchResults : false
        // })
    }

    render(){

        const { result, showSearchResults } = this.props.search;
        // console.log("Result : ", result);

        return (
            <div  className='nav' >
                <div className='search-container' >
                    <input type='text' onChange={this.handleChange} />
                    <button id='search-btn' onClick={this.handleSearch} >Search</button>
                    {showSearchResults && 
                        <div className='search-results'>
                            <div className='search-result'>
                                <img src={ result.Poster } alt='poster' />
                                <div className='movie-info'>
                                    <span>{ result.Title }</span>
                                    <button onClick={() => this.handleAddMovie(result) }>Add Movie</button>
                                </div>                        
                            </div>
                        </div>}

                </div>
                
            </div>
        )
    }
}

export default Navbar;