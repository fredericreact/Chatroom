import {INPUT_CHANGE, MESSAGE_SUBMIT, MESSAGE_RECEIVED} from '../actions/messagesActions'



import { LOGIN_SUCCESS,LOGIN_ERROR } from '../actions/user';

const stateInitial = {
    list:[],
    messageText:"",
    author:'anonyme',
}

const reducerMessage = (state = stateInitial,action ={}) => {

switch(action.type){

  case LOGIN_SUCCESS:
    return{
      ...state,
      author:action.payload.pseudo
    };

  case LOGIN_ERROR:
    return{
      ...state,
      author:'anonyme',
    };  

  case MESSAGE_RECEIVED:
    return{
      ...state,
      list: [...state.list, action.payload]
    };

  case MESSAGE_SUBMIT:

  return{
      ...state,
      // list: [
      //   ...state.list,
      //   {
      //     id:uuidv4(),
      //     author:state.author,
      //     content:state.messageText,
      //   } ,
      // ],
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