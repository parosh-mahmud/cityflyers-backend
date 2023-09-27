import React from 'react';


import './App.css';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage'
import AuthPage from './components/auth/AuthPage';
import ResultPage from './components/resultpage/ResultPage';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/signin" component={AuthPage}/>
        <Route path="/result" component={ResultPage}/>
        {/* Comment out any other routes */}
      </Switch>
    </div>
  );
}

export default App;
