import React from 'react';
import { addFavourite } from '../action';

class MovieCard extends React.Component{

    handleFavourite = () => {
        const { movie } = this.props;
        this.props.dispatch( addFavourite(movie) );
    }

    handleUnFavourite = () => {
        
    }

    render(){
        const { movie, isFavourite } = this.props;

        return (
            <div className='movie-card'>
                <div className='left'>
                    <img src={movie.Poster} alt="movie poster" />
                </div>
                <div className='right'>
                    <div className='title'>{movie.Title}</div>
                    <div className='plot'>{movie.Plot}</div>
                    <div className='footer' >
                        <div className='rating'>{movie.imdbRating}</div>
                        {isFavourite ? 
                         <button className='unfavourite-btn' onClick= { this.handleUnfavourite } >Remove favourite</button> :
                         <button className='favourite-btn'  onClick= { this.handleFavourite } >Add to favourite</button>  
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;