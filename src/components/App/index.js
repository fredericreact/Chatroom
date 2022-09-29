// == Import npm
import React from 'react';
import MessageForm from '../../containers/MessageForm';
import MessageList from '../../containers/MessagesList';
import Settings from '../Settings';
import './style.scss'
// == Composant




const App = () => (
  <div className='app'>
    
   <Settings 
   opened
  formData={{email:'hello', password:'123'}}
onInputChange={()=>{}}
onFormSubmit={()=>{}}
onToggle={()=>{}}



   />
    <MessageList />
    <MessageForm 

    />
  </div>
);

// == Export
export default App;