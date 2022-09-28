// == Import npm
import React from 'react';
import MessageForm from '../MessageForm';
import MessageList from '../MessageList';
import './style.scss'
// == Composant
const App = () => (
  <div className='app'>
    
   
    <MessageList/>
    <MessageForm/>
  </div>
);

// == Export
export default App;