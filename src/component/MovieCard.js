import React from 'react';

class MovieCard extends React.Component{
    render(){
        const movie = this.props.movie;

        return (
            <div className='card'>
                <div className='poster'>
                    <img src={movie.Poster} alt="movie poster" />
                </div>
                <div className='description'>
                    <div className='title'>{movie.Title}</div>
                    <div className='plot'>{movie.Plot}</div>
                    <footer>
                        <div className='ratings'>{movie.imdbRating}</div>
                        <div className='add-favourites'>Add to favourites</div>
                    </footer>
                </div>
            </div>
        )
    }
}

export default MovieCard;