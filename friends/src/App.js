import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './views/Login';
import FriendsList from './views/FriendsList';
import './App.scss';

const App = (props) => {
  return (
    <div className="App">
      <Route path="/login" component={Login}/>
      <PrivateRoute path="/friends-list" component={FriendsList}/>
    </div>
  );
};

export default App;
