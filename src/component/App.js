import React from 'react';
import { data } from '../data';
import Navbar from '../component/Navbar';
import MovieCard from '../component/MovieCard';

class App extends React.Component {
  render () {
	  return (
		<div className="App">
			<Navbar />

			<main>
				<div>
					<button className='tab-btn'>Movie List</button>
					<button className='tab-btn'>Favourites</button>
				</div>
				<div className='list'>
					{data.map( (movie, index) => (
						<MovieCard movie={movie} key={`movie_${index}`} />
					))}
				</div>
			</main>
		</div>
	);
	}
}

export default App;
