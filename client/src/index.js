import React from 'react';
import { createRoot } from 'react-dom/client'; // Updated import
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './redux/store'; 
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    
      <ChakraProvider>
        <Router>
          <Provider store={store}>
          <App />
          </Provider>
        </Router>
      </ChakraProvider>
    
    </BrowserRouter>
  </React.StrictMode>
);
