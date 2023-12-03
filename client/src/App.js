import React from 'react';


import './App.css';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage'
import AuthPage from './components/auth/AuthPage';
import FlightResult from '..//./src/components/FlightResults/FlightResults'
import TestSearch from '..//src/components/FlightSearch/TestSearch'
import ApiTestComponent from './components/FlightSearch/ApiTestComponent.js';
import PassengerDetailsForm from './components/ReservationForm/PassengerDetailsForm'
import TestComponent from './components/TestComponent';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/signin" component={AuthPage}/>
        <Route path="/flight-results" component={FlightResult}/>
        <Route path="/testSearch" component={TestSearch}/>
        <Route path="/testapi" component={ApiTestComponent}/>
        <Route path="/passenger-details" component={PassengerDetailsForm}/>
        <Route path="/test" component={TestComponent}/>
        
       
        {/* Comment out any other routes */}
      </Switch>
    </div>
  );
}

export default App;
