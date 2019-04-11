import React from 'react';
import { Route } from 'react-router-dom';
import Login from './views/Login';
import './App.css';

const App = (props) => {
  return (
    <div className="App">
      <Route path="/login" component={Login}/>
      Friends
    </div>
  );
};

export default App;
