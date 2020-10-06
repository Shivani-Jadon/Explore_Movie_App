import React from 'react';
import { data } from '../data';
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
		store.dispatch({
			type : 'ADD_MOVIES',
			movies : data 
		  });

		console.log(store.getState());

		
	}
	
	render () {
		
		const movies = this.props.store.getState();
		console.log('movies ',movies);

		return (
			<div className="App">
				<Navbar />

				<main>
					<div>
						<button className='tab-btn'>Movie List</button>
						<button className='tab-btn'>Favourites</button>
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
