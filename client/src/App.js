import React from 'react';


import './App.css';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage'
import AuthPage from './components/auth/AuthPage';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/signin" component={AuthPage}/>
        
       
        {/* Comment out any other routes */}
      </Switch>
    </div>
  );
}

export default App;
