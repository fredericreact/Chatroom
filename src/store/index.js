import {createStore, compose, applyMiddleware} from 'redux';


import rootReducer from '../reducers/index'
import logMiddleware from '../middleware/logMiddleware';
import loginMiddleware from '../middleware/loginMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    loginMiddleware,
    // logMiddleware,
    
    
  ),
 
);

const store = createStore(
    rootReducer,   enhancers
)

console.log(store.getState());

export default store