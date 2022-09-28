import {INPUT_CHANGE} from '../actions/messagesActions'

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
            {
              id:'3',
              author:'John',
              content:'hi',
            },
          
    ],
    messageText:"je suis en cours de",
}

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