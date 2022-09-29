import {INPUT_CHANGE, MESSAGE_SUBMIT} from '../actions/messagesActions'

const stateInitial = {
    list:[
        
            
          
    ],
    messageText:"",
}

const reducerMessage = (state = stateInitial,action ={}) => {

switch(action.type){
  case MESSAGE_SUBMIT:

  return{
      ...state,
      list: [
        ...state.list,
        {
          id:'5',
          author:'tom',
          content:state.messageText,
        } ,
      ],
      messageText:'',
    }
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