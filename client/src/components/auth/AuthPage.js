

import React, { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';


const AuthPage = () => {
  const [showLogin, setShowLogin] = useState(true);

  const handleToggle = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div>
      
      {showLogin ? <Login /> : <SignUp handleToggle={handleToggle} />}
      <button onClick={handleToggle}>
        {showLogin ? "Don't have an Account? Sign Up." : 'Back to Login'}
      </button>
    </div>
  );
};

export default AuthPage;
