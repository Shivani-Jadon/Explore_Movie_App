import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './component/App';
import rootReducer from './reducer';

// middleware to modify reducer before dispatch
const logger = ({dispatch, getstate}) => (next) => (action) => {
	// middleware code
	if(typeof action !== 'function'){
		console.log("Action type : ", action.type);
	}
		
	next(action);
}

// for action creators which return function instead of action
// const thunk = ({dispatch, getstate}) => (next) => (action) => {
// 	// middleware code
// 	if(typeof action === 'function'){
// 		action(dispatch);
// 		return;
// 	}
// 	next(action);
// }

const store = createStore( rootReducer, applyMiddleware(logger, thunk) );
console.log("Store", store);
console.log("State before", store.getState() );

// dispatch the action and return new state
// store.dispatch({
//   type : 'ADD_MOVIES',
//   movies : [{name : 'Superman'}]
// });

// console.log("State after", store.getState() );

ReactDOM.render(

    <App store={store} />,
  document.getElementById('root')
);

;
