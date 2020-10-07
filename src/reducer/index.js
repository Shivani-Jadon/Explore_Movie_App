import { ADD_MOVIES } from '../action';

const initialMoviesState = {
    list : [],
    favurites : []
}

function reducer(state = initialMoviesState , action){
    if(action.type === ADD_MOVIES){
        return {
            ...state,
            list : action.movies
        };
    }
    // will return the default state if no action is defined
    return state;
}

export default reducer;