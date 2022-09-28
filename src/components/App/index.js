// == Import npm
import React from 'react';
import MessageForm from '../MessageForm';
import MessageList from '../../containers/MessagesList';
import './style.scss'
// == Composant




const App = () => (
  <div className='app'>
    
   
    <MessageList />
    <MessageForm messageText="coucou" 
    onMessageChange={(textesaisi)=>{
console.log(textesaisi);
    }}
    onMessageSubmit={()=>{
      console.log('message');
    }}

    />
  </div>
);

// == Export
export default App;