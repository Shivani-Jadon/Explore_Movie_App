import { combineReducers } from 'redux';
 
import { ADD_MOVIES, ADD_FAVOURITE, REMOVE_FAVOURITE, SHOW_FAVOURITE } from '../action';

const initialMoviesState = {
    list : [],
    favourites : [],
    showFavourite : false
}

export function movieReducer(state = initialMoviesState , action){
    console.log("Movie Reducer");
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

        case REMOVE_FAVOURITE : let favourites = [...state.favourites  ];
                                favourites.splice(favourites.indexOf(action.movie), 1)
                                return {
                                    ...state,
                                    favourites : [ ...favourites ]
                                }
                                break;

        case SHOW_FAVOURITE :  return {
                                    ...state,
                                    showFavourite : action.val
                                };
                            break;                      

        default : return state;                    
    }

    // will return the default state if no action is defined
    return state;
}

const initialSearchState = {
    result : {}
}

export function searchReducer(state = initialSearchState, action){
    console.log("Search Reducer");
    return state
}

// const initialRootState = {
//     movies : initialMoviesState,
//     search : initialSearchState
// }

// function rootReducer(state = initialRootState, action){
//     return {
//         movies : movieReducer( state.movies, action ), 
//         search : searchReducer( state.search, action )
//     }
// }
// export default rootReducer;


// using method provided by redux inplace of above method
export default combineReducers({
    movies : movieReducer,
    search : searchReducer
})


