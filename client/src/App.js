import React from 'react';


import './App.css';
import { Switch, Route } from 'react-router-dom';

import DashBoard from './pages/DashBoard';
import Login from './components/auth/Login';
import AuthPage from './components/auth/AuthPage';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={DashBoard} exact />
        <Route path="/signin" component={AuthPage}/>
        {/* Comment out any other routes */}
      </Switch>
    </div>
  );
}

export default App;
