
import React from 'react';
import DashBoardHeader from '../components/Header/MainHeader';
import Footer from '../components/footer/Footer';

const LayoutPage = ({ children }) => {
  return (
    <div>
      <DashBoardHeader />
      {children}
      <Footer />
    </div>
  );
};

export default LayoutPage;