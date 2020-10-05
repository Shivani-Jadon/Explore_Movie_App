import React from 'react';
import { data } from '../data';
import Navbar from '../component/Navbar';
import MovieCard from '../component/MovieCard';

function App() {
  return (
    <div className="App">
    	<Navbar />

      	<main>
        	<div>
				<button className='tab-btn'>Movie List</button>
				<button className='tab-btn'>Favourites</button>
        	</div>
			<div className='list'>
				{data.map(movie => (
					<MovieCard movie={movie}/>
				))}
			</div>
		</main>
    </div>
  );
}

export default App;
