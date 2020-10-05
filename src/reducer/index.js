function reducer(state = [] , action){
    if(action.type === 'ADD_MOVIES'){
        return action.movies;
    }
    // will return the default state if no action is defined
    return state;
}

export default reducer;