import { combineReducers } from 'redux';
 
import { ADD_MOVIES,
         ADD_FAVOURITE,
         REMOVE_FAVOURITE,
         SHOW_FAVOURITE, 
         ADD_MOVIE_TO_LIST, 
         ADD_SEARCH_RESULT } from '../action';

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
            

        case ADD_FAVOURITE : return {
                                ...state,
                                favourites : [  action.movie , ...state.favourites  ]
                            }      
                             

        case REMOVE_FAVOURITE : let favourites = [...state.favourites  ];
                                favourites.splice(favourites.indexOf(action.movie), 1)
                                return {
                                    ...state,
                                    favourites : [ ...favourites ]
                                }
                        

        case SHOW_FAVOURITE :  return {
                                    ...state,
                                    showFavourite : action.val
                                };
                                         
        
        case ADD_MOVIE_TO_LIST : return {
                                    ...state,
                                    list : [action.movies, ...state.list]
                                };
                    

        default : return state;                    
    }

    // will return the default state if no action is defined
    return state;
}

const initialSearchState = {
    result : {},
    showSearchResults : false
}

export function searchReducer(state = initialSearchState, action){
    switch(action.type) {
        case ADD_SEARCH_RESULT : return {
                                    ...state,
                                    result : action.movie ,
                                    showSearchResults : true
                                }
        
        case ADD_MOVIE_TO_LIST : return {
                                    ...state,
                                    showSearchResults : false
                                };

        default : return state;
     
    }

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


