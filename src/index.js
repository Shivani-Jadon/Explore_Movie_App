import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import './index.css';
import App from './component/App';
import rootReducer from './reducer';

const store = createStore(rootReducer);
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
