import {CONNECT_SOCKET} from '../actions/user';
import {MESSAGE_SUBMIT, messageReceived} from '../actions/messagesActions';

let socket;

export default (store)=>(next)=>(action)=> {

    console.log('socketmiddle')


    const {getState, dispatch} = store;
    const state =getState();
   
next(action);




switch (action.type) {

    case CONNECT_SOCKET:
        // JE crée ma connexion et la sauvegarde
      // dans une variable déclarée en scope global
        socket = window.io('http://localhost:3001');
        // Je commence à écouter les messages qui
      // arrivent via le serveur
        socket.on('send_message', (message)=> {
            console.log('un message est arrive', message);
            dispatch(messageReceived(message));
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