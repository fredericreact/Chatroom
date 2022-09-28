import {createStore} from 'redux';
import {devToolsEnhancer } from 'redux-devtools-extension';

import rootReducer from '../reducers/index'

const store = createStore(
    rootReducer, devToolsEnhancer()
)

console.log(store.getState());

export default store