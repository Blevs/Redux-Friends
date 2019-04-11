import React from 'react';
import { Route } from 'react-router-dom';
import Login from './views/Login';
import FriendsList from './views/FriendsList';
import './App.css';

const App = (props) => {
  return (
    <div className="App">
      <Route path="/login" component={Login}/>
      <Route path="/friends-list" component={FriendsList}/>
      Friends
    </div>
  );
};

export default App;
