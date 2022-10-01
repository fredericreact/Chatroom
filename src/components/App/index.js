// == Import npm
import React, {useEffect} from 'react';
import MessageForm from '../../containers/MessageForm';
import MessageList from '../../containers/MessagesList';
import Settings from '../../containers/Settings';
import './style.scss'
// == Composant

const App = ({ connectSocket }) => {
  useEffect(connectSocket, []);
  return (
    <div className="app">
      <Settings />
      <MessageList />
      <MessageForm />
    </div>
  );
};
// == Export
export default App;