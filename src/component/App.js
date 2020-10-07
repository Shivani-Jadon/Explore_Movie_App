import React from 'react';
import { data } from '../data';
import { addMovies } from '../action';	//when export isn't default
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
	
	render () {
		
		const movies = this.props.store.getState();
		console.log('movies ',movies);

		return (
			<div className="App">
				<Navbar />

				<main className='main'>
					<div className='tabs'>
						<button className='tab active-tabs'>Movie List</button>
						<button className='tab'>Favourites</button>
					</div>
					<div className='list'>
						{movies.map( (movie, index) => (
							<MovieCard movie={movie} key={`movie_${index}`} />
						))}
					</div>
				</main>
			</div>
		);
		}
}

export default App;
