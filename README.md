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

# uuid
```javascript
npm i uuid
```

# axios
```javascript
npm install axios
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



### Middleware

Action asyncrhoone

Redux gere pas l’asyncrhone, il est synchrone

Il s’attend a ce que tout soit deja pret, que les object d’action sont deja prets a etre envoyes aux containers et reducers qui vont dispatcher action ou updater state

REDUX Attend rien

Middleware solve this issue : attend que j’ai les resultat avant de les passer

Il va se placer entre une action et un reducer

Middleware c’est un triple fonction avec :

-acces au store

-Next c’est une fonction qui permet de laisser passer action

-Et l’action

Je laisse passer les actions d’abord, puis je faire mes blocages apres

```javascript
const logMiddleware = (store) => (next) => (action) => {
    console.log(store.getState());
    console.log('Je laisse passer cette action: ', action);
    next(action);
  };
 
  export default logMiddleware;
```

```javascript
import {createStore, compose, applyMiddleware} from 'redux';
 
 
import rootReducer from '../reducers/index'
import logMiddleware from '../middleware/logMiddleware';
 
 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 
const enhancers = composeEnhancers(
  applyMiddleware(
    logMiddleware,
    // secondMiddleware,
  ),
 
);
 
const store = createStore(
    rootReducer,   enhancers
)
 
console.log(store.getState());
 
export default store
```
Redux utilise ce middleware via le store


<br> 
Je cree middleware

Next va laisser passer toutes les actions

Si je mets next en bas, si je le mets pas en haut, ca bloque tout

Mais si l’action est login submit , on laisse passer laction login submit mais mais on va lancer une etape en plus, qui en fonction du resultat va dispatcher une nvew action

Ici j’utilise getstate au lieu de connect parce que je ne passe pas de props au components

```javascript
import { LOGIN_SUBMIT, loginSuccess,loginError } from "../actions/user";
 
import axios from "axios";
 
 
const url='http://localhost:3001/login';
 
export default (store)=>(next)=>(action)=> {
 
    console.log('laisse passe par middleware');
 
    next(action);
 
    switch(action.type) {
 
    case LOGIN_SUBMIT:
        axios({
            method: 'post',
            url,
            data:store.getState().user.formData,
        })
        .then((res)=>{
            console.log(res.data);
            store.dispatch(loginSuccess(res.data))
        })
        .catch((err)=>{
            console.log(err);
            store.dispatch(loginError())
        });
 
        break;
 
 
    default:
}
 
};

```


Definir comment le reducer va reagir aux actions dispatche par le middleware


```javascript
import { LOGIN_INPUT_CHANGE ,
    TOGGLE_LOGIN_FORM,
    LOGIN_SUBMIT,
    LOGIN_ERROR,
    LOGIN_SUCCESS} from "../actions/user";
 
 
const initialState={
    loading:false,
    opened:true,
    user:{},
    formData:{
        email:'bouclierman@herocorp.io',
        password:'jennifer',
    },
}
 
 
 
export default (state=initialState,action={}) =>{
    switch(action.type) {
 
        case LOGIN_SUBMIT:
            return{
              ...state,
              opened:false,
              loading:true,  
            }
 
        case LOGIN_SUCCESS:
            return{
                ...state,
                loading:false,
                formData: {email:'',password:''},
                user:{
                    ...action.payload,
                }
            }
       
        case LOGIN_ERROR:
            return {
                ...state,
                user:{},
                loading:false,
                opened:true,
            }    
 
        case TOGGLE_LOGIN_FORM:
            return {
                ...state,
                opened:!state.opened,
            }
        case LOGIN_INPUT_CHANGE:
            return {
                ...state,
                formData: {
                    ...state.formData,
                    ...action.payload,
                }
            }
        default:
            return state;
    }
}

```

Importer et ajouter dans le store

```javascript
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
```