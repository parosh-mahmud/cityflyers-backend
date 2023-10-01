

import React, { useState } from 'react';
import Login from '../components/auth/Login';
import SignUp from '../components/auth/SignUp';
import DashBoardHeader from '../components/Header/MainHeader';
import DashBoard from './DashBoard';
import LayoutPage from './LayoutPage';
import SearchFlight from '../components/FlightSearch/AirSearchForm';
const Homepage = () => {
  

  return (
    <LayoutPage>
      

      
      <SearchFlight/>
      
      
    </LayoutPage>
  );
};

export default Homepage;
