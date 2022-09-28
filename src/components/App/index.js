// == Import npm
import React from 'react';
import MessageForm from '../MessageForm';
import MessageList from '../MessageList';
import './style.scss'
// == Composant


const fakeMessages =[
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
]


const App = () => (
  <div className='app'>
    
   
    <MessageList list={fakeMessages}/>
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