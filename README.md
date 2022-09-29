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

# Partie 1 : Mettre en place Redux Javascript Vanilla
1. Creer le store en lui donnant le reducer

Le store c’est un objet avec des fonctions 
```javascript
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import reducer from './reducer';

const store = createStore(reducer, devToolsEnhancer());

export default store;
```

2. Creer le reducer

REducer c’est une fonction qui return le state
```javascript

const initialState = {
  firstColor: '#e367a4',
  lastColor: '#48b1f3',
  direction: '90deg',
  nbColors: 33,
};

export default (state = initialState, action = {}) => {

    default:
      return state;
  };
```

3. Consulter le state
```javascript
import store from './store';
store.getState();
```

4. Updater mon state

Creer les actions et action creators
```javascript
export const RAND_FIRST = 'RAND_FIRST';
export const RAND_LAST = 'RAND_LAST';
export const CHANGE_DIRECTION = 'CHANGE_DIRECTION';

export const randFirst = (randomColor) => ({
  type: RAND_FIRST,
  color: randomColor,
});

export const randLast = (color) => ({
  type: RAND_LAST,
  color,
});

export const changeDirection = (direction) => ({
  type: CHANGE_DIRECTION,
  direction,
});
```

Definir comment va reagir mon reducer en fonction de l'action type
```javascript
import {
  RAND_FIRST, RAND_LAST, CHANGE_DIRECTION,
} from './actions';

const initialState = {
  firstColor: '#e367a4',
  lastColor: '#48b1f3',
  direction: '90deg',
  nbColors: 33,
};

export default (state = initialState, action = {}) => {

  switch (action.type) {
    case CHANGE_DIRECTION:
      return {
        ...state,
        direction: action.direction,
      };
    case RAND_FIRST:
      return {
        ...state,
        firstColor: action.color,
        nbColors: state.nbColors + 1,
      };
    case RAND_LAST:
      return {
        ...state,
        lastColor: action.color,
        nbColors: state.nbColors + 1,
      };

    default:
      return state;
  }
};

```
Dispatch
```javascript
import store from './store';
store.dispatch(randFirst());
```




# Partie 2 : Ajouter React-Redux

1. englober app dans provider et lui donner le store 

Provider, je lui donne mon store et il a acces a mon store
Et les donne aux containers

```javascript
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import store from './store'
const root = document.getElementById('root');

const Component = <Provider store={store}> <App /></Provider>;

render(Component, root);
```



2. Creer container qui va donner les props au components ET acceder/updater state

Container : prendre un composant et lui filer les infos qui viennent du state ou les fonctions qui lui permettre d’updater le state

Du coup j’importe plus le composant mais le container et jai plus besoin de donner les props

<br>

Consulter le state
```javascript
import {connect} from 'react-redux';
import NbColors from '../components/NbColors'; 

const aupif = (state) =>({
    total:state.nbColors,
});

const mapDispatchToProps =null;

const fonctionpreteadonnerpropsaunnouveaucomposant =connect(aupif,mapDispatchToProps);

const composantexport = fonctionpreteadonnerpropsaunnouveaucomposant(NbColors);

export default composantexport;

```
dispatch une action pour updater le state
```javascript
import {connect} from 'react-redux';
import RandomButtons from '../components/RandomButtons'; 
import { randFirst,randLast } from '../store/actions';
import {randomHexColor} from '../utils';

const aupif = null;

const mapDispatchToProps = (dispatch) =>({
    onFirstClick: () =>{
        const color =randomHexColor();
        dispatch (randFirst(color));
    },
    onLastClick: () =>{
        const color =randomHexColor();
        dispatch (randLast(color));
    }
});

const mafonction =connect(aupif,mapDispatchToProps);

const composantexport = mafonction(RandomButtons);

export default composantexport;
```

## Hooks

Redux : on peut utiliser des hooks 
Useselector
Usedispatch

On ne se sert pas des hooks parce qu’un composant ne doit faire que de laffichage.

La si jutilise les hooks dans mon composant il ne fait pas ke de laffichage, il recup de la data aussi

Ce qui ete le cas avec les props

En plus il doit utiliser redux pour fonctionner donc il est plus universel


# Mettre en place Redux

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

# Verifier que redux me donne acces au state
Option 1 :
```javascript
console.log(store.getState());
```
Option 2 : 
checker le state dans redux devtools extension

# Mettre en place React-Redux

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

2. Remove props and import container

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

1. Create actions and actions creators

```javascript
export const INPUT_CHANGE ='INPUT_CHANGE';

export const inputChange =(text) => ({
    type: INPUT_CHANGE,
    text,
})
```

2. Ajouter action dans mon reducer

```javascript
import {INPUT_CHANGE} from '../actions/messagesActions'

const reducerMessage = (state = stateInitial,action ={}) => {

switch(action.type){
  case INPUT_CHANGE:
    
    return {
      ...state,
      messageText:action.text,
    };
    default: 
    return state;
}

}

export default reducerMessage;
```

3. Creer container

```javascript
import {connect} from 'react-redux';
import MessageForm from '../components/MessageForm';
import {inputChange} from '../actions/messagesActions'

const mapDispatchToProps = (dispatch) => ({
onMessageChange:(textesaisi)=>{
    dispatch(inputChange(textesaisi));
    
        },
onMessageSubmit:()=>{
    console.log('message');
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
```

### Creer dans un object une propriete dont le nom correspond de la valeur d'une variable : 

```javascript
const handleInputChange =(e)=>{
    console.log(e.target.name, e.target.value)
    const {name, value} =e.target;
    console.log({
        [name]:value,
    })
    onInputChange({
        [name]:value
    });
    }
```