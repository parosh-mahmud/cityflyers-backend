import React from 'react';


import './App.css';
import { Switch, Route } from 'react-router-dom';

import DashBoard from './pages/DashBoard';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={DashBoard} exact />
        {/* Comment out any other routes */}
      </Switch>
    </div>
  );
}

export default App;
