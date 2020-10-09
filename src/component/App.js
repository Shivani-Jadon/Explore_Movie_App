import React from 'react';
import { connect } from 'react-redux';
import { data } from '../data';
import { addMovies, addFavourite, setShowFavourite } from '../action';	//when export isn't default
import Navbar from '../component/Navbar';
import MovieCard from '../component/MovieCard';

class App extends React.Component {

	componentDidMount(){
		const store = this.props;

		// API call
		store.dispatch( addMovies(data) );

		// console.log(store.getState());
		
	}
	
	// function to check if movie is favourite or not
	isMovieFavourite = (movie) => {
		const { movies } = this.props;
		
		const index = movies.favourites.indexOf(movie);

		if( index !== -1){
			return true;
		}else{
			return false;
		}
	}
	
	// function to handle tab change
	handleTabChange = (val) => {
		this.props.dispatch(setShowFavourite(val));
	}

	render () {
		const { movies, search } = this.props;		// { movies : {} , search : {} }
		const { list, favourites, showFavourite } = movies; 	
		// console.log('movies ', this.props.store.getState()  );

		const displayMovies = showFavourite ?  favourites : list ;

		return (
			<div className="App">
				<Navbar dispatch={this.props.dispatch} search={search} />

				<main className='main'>
					<div className='tabs'>
						<button className={`tab ${showFavourite ? '' : 'active-tabs'}`} onClick={() => this.handleTabChange(false)}>Movie List</button>
						<button className={`tab ${showFavourite ? 'active-tabs' : ''}`} onClick={() => this.handleTabChange(true)}>Favourites</button>
					</div>
					<div className='list'>
						{displayMovies.map( (movie, index) => (
							<MovieCard movie={movie}   key={`movie_${index}`}
								dispatch={this.props.dispatch}
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

function mapStateTOProps(state){
	return {
		movies : state.movies,
		search : state.search
	}
}

const connectAppComponent = connect(mapStateTOProps)(App);

// Wrapper around App to access store in App methods
	// StoreContext can be used only with Consumer method
// class AppWrapper extends React.Component{

// 	render(){
// 		return (
// 		<StoreContext.Consumer>
// 			{(store) => <App store={store} />}
// 		</StoreContext.Consumer>
// 		)
// 	}
// }

export default connectAppComponent;
