import {LOGIN_SUCCESS} from '../actions/user';
import {MESSAGE_SUBMIT} from '../actions/messagesActions';

let socket;

export default (store)=>(next)=>(action)=> {

    console.log('socketmiddle')


    const {getState, dispatch} = store;
    const state =getState();
   
next(action);




switch (action.type) {

    case LOGIN_SUCCESS:
        // JE crée ma connexion et la sauvegarde
      // dans une variable déclarée en scope global
        socket = window.io('http://localhost:3001');
        // Je commence à écouter les messages qui
      // arrivent via le serveur
        socket.on('send_message', (message)=> {
            console.log('un message est arrive', message);
          })
    

        break;

    case MESSAGE_SUBMIT: {
        const {messageText, author} =state.messages;
        socket.emit('send_message', {
            author: author,
            content: messageText,
        });
    break;
}
    default:
 }
};