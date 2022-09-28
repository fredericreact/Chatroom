// == Import npm
import React from 'react';
import MessageForm from '../../containers/MessageForm';
import MessageList from '../../containers/MessagesList';
import './style.scss'
// == Composant




const App = () => (
  <div className='app'>
    
   
    <MessageList />
    <MessageForm 

    />
  </div>
);

// == Export
export default App;