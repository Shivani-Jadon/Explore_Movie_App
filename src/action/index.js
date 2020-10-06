// {
//     type : 'ADD_MOVIES'
//     movie : ['m1', 'm2']
// }

export const ADD_MOVIES = 'ADD_MOVIES';

export function addMovies(movies) {
    return {
        type : ADD_MOVIES,
        movies
    }
}
