import React from 'react';
import { data } from '../data';
import { addMovies, addFavourite, setShowFavourite } from '../action';	//when export isn't default
import Navbar from '../component/Navbar';
import MovieCard from '../component/MovieCard';

class App extends React.Component {

	componentDidMount(){
		const store = this.props.store;

		store.subscribe(() => {
			console.log("State updated");
			// forceUpdate should not be used as it forces to update state
			this.forceUpdate();
		});

		// API call
		store.dispatch( addMovies(data) );

		console.log(store.getState());
		
	}
	
	// function to check if movie is favourite or not
	isMovieFavourite = (movie) => {
		const { favourites } = this.props.store.getState();
		const index = favourites.indexOf(movie);

		if( index !== -1){
			return true;
		}else{
			return false;
		}
	}
	
	// function to handle tab change
	handleTabChange = (val) => {
		this.props.store.dispatch(setShowFavourite(val));
	}

	render () {
		
		const { list, favourites, showFavourite } = this.props.store.getState(); 	//list : [], favurites : []
		console.log('movies ', this.props.store.getState()  );

		const displayMovies = showFavourite ?  favourites : list ;

		return (
			<div className="App">
				<Navbar />

				<main className='main'>
					<div className='tabs'>
						<button className={`tab ${showFavourite ? '' : 'active-tabs'}`} onClick={() => this.handleTabChange(false)}>Movie List</button>
						<button className={`tab ${showFavourite ? 'active-tabs' : ''}`} onClick={() => this.handleTabChange(true)}>Favourites</button>
					</div>
					<div className='list'>
						{displayMovies.map( (movie, index) => (
							<MovieCard movie={movie}   key={`movie_${index}`}
								dispatch={this.props.store.dispatch}
								isFavourite = { this.isMovieFavourite(movie) }	/>
						))}
					</div>
					{/* if no movie in favopurites list then display this msg */}
					{displayMovies.length === 0 ? <div className='no-movies'> No Favourite Movie </div> : null }
				</main>
			</div>
		);
		}
}

export default App;
