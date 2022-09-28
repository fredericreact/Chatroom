# Redux

```javascript
npm install redux
```

# React-Redux

```javascript
npm install react-redux
```

# redux-devtools-extension
```javascript
npm i redux-devtools-extension
```


# Verifier que redux me donne acces au state
Option 1 :
```javascript
import {createStore} from 'redux';
import {devToolsEnhancer } from 'redux-devtools-extension';

import rootReducer from '../reducers/index'

const store = createStore(
    rootReducer, devToolsEnhancer()
)

console.log(store.getState());

export default store
```

Option 2 : 
checker le state dans redux devtools extension

# Mettre en place Redux

```javascript
import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import store from './store'
import App from './components/App';

const rootReactElement = <Provider store={store}><App /></Provider>;
const target = document.getElementById('root');
render(rootReactElement, target);
```

```javascript
import { combineReducers } from 'redux';

import messages from './messages';
export default combineReducers({
    messages,
});
```

```javascript
const stateInitial = {
    list:[
        
            {
              id:'1',
              author:'ben',
              content:'hello',
            },
            {
              id:'2',
              author:'fred',
              content:'salut',
            },
          
    ],
    messageText:"je suis en cours de",
}

const reducerMessage = (state = stateInitial,action ={}) => {

switch(action.type){
    default: 
    return state;
}

}

export default reducerMessage;
```


# Mettre en place React-Redux

## Consulter state

1. Create container

```javascript

import {connect} from 'react-redux';
import MessagesList from '../components/MessageList';

const mapStateToProps = (state)=>({
    list:state.messages.list,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(MessagesList);

```

2. Remove props

```javascript

import React from 'react';
import MessageForm from '../MessageForm';
import MessageList from '../../containers/MessagesList';
import './style.scss'

const App = () => (
  <div className='app'>
    
    <MessageList />
    
  </div>
);

export default App;

```

## Modifier state

