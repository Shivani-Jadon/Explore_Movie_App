import React from 'react';
import { data } from '../data';
import { addMovies, addFavourite } from '../action';	//when export isn't default
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
	
	isMovieFavourite = (movie) => {
		const { favourites } = this.props.store.getState();
		const index = favourites.indexOf(movie);

		if( index !== -1){
			return true;
		}else{
			return false;
		}
    }

	render () {
		
		const { list } = this.props.store.getState(); 	//list : [], favurites : []
		console.log('movies ', this.props.store.getState()  );

		return (
			<div className="App">
				<Navbar />

				<main className='main'>
					<div className='tabs'>
						<button className='tab active-tabs'>Movie List</button>
						<button className='tab'>Favourites</button>
					</div>
					<div className='list'>
						{list.map( (movie, index) => (
							<MovieCard movie={movie}   key={`movie_${index}`}
								dispatch={this.props.store.dispatch}
								isFavourite = { this.isMovieFavourite(movie) }	/>
						))}
					</div>
				</main>
			</div>
		);
		}
}

export default App;
