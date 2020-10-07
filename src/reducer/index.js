import { ADD_MOVIES, ADD_FAVOURITE } from '../action';

const initialMoviesState = {
    list : [],
    favourites : []
}

function reducer(state = initialMoviesState , action){
    
    switch(action.type) {
        case ADD_MOVIES : return {
                                ...state,
                                list : action.movies
                            };
                        break;

        case ADD_FAVOURITE : return {
                                ...state,
                                favourites : [  action.movie , ...state.favourites  ]
                            }      
                            break;          

        default : return state;                    
    }

    // will return the default state if no action is defined
    return state;
}

export default reducer;