
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';
export const SHOW_FAVOURITE = 'SHOW_FAVOURITE';

export function addMovies(movies) {
    return {
        type : ADD_MOVIES,
        movies
    }
}

export function addFavourite(movie) {
    return {
        type : ADD_FAVOURITE,
        movie
    }
}

export function removeFavourite(movie) {
    return {
        type : REMOVE_FAVOURITE,
        movie
    }
}

export function setShowFavourite(val) {
    return {
        type : SHOW_FAVOURITE,
        val
    }
}

export function handleMovieSearch(movie) {
    const url = `http://www.omdbapi.com/?apikey=[5fa446ae]&t=${movie}`;

    return function(dispatch){
        fetch(url)
            .then(response => response.json())
            .then(movie => {
                console.log("Movie : ", movie)
            })

        // dispatching an action
        // dispatch({type: 'ADD_SERACH_RESULT', movie})
    }
   
}