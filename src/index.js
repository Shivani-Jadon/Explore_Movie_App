import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

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


// create React Context for store
// export const StoreContext = React.createContext();

// Provider will provide StoreContext to the components
// class Provider extends React.Component{

// 	render(){
// 		const { store } = this.props;

// 		return (
// 			<StoreContext.Provider value={store}>
// 				{this.props.children}
// 			</StoreContext.Provider>
// 		)		
// 	}
// }


//	Implement connect function
	//  const connectComponent = connect(callback)(component)
// export function connect(mapStatetoProps){
// 	return function(Component){
// 		class ConnectComponent extends React.Component{			
// 			constructor(props){
// 				super(props);
// 				this.unsubscribe = store.subscribe(() => {
// 						console.log("State updated");
// 						// forceUpdate should not be used as it forces to update state
// 						this.forceUpdate();
// 					});
		
// 			}

// 			componentWillUnmount(){
// 				this.unsubscribe();
// 			}

// 			render(){
// 				return (
// 					<StoreContext.Consumer>
// 						{(store) => {
// 							const state = store.getState();
// 							const dataPassedAsProps = mapStatetoProps(state);
// 							return (
// 								<Component {...dataPassedAsProps} dispatch={store.dispatch}/>
// 							)
							
// 							}
// 						}
// 					</StoreContext.Consumer>
// 				)
// 			}
// 		} 

// 		class ConnectComponentWrapper extends React.Component{
// 			render(){
// 				return (
// 					<StoreContext.Consumer>
// 						{(store) => <ConnectComponent store={store} />}
// 					</StoreContext.Consumer>	
// 				)
// 			}
// 		}

// 		return ConnectComponentWrapper;
// 	}
// }

/* Provider , Context and connect are provided by react-redux package' */

ReactDOM.render(

	<Provider store={store}>
		<App />
	</Provider>,
    document.getElementById('root')
);


