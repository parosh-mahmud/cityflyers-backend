import React from 'react'
import { Button, Text } from '@chakra-ui/react'
import DashBoardHeader from '../components/dashboardComponents/DashBoardHeader';
import SearchFlight from '../components/dashboardComponents/SearchFlight';
const DashBoard = () => {
  return (
    <div>
      <DashBoardHeader/>
      <SearchFlight/>
      
    </div>
  );
}


export default DashBoard
