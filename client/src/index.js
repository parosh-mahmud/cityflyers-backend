import React from 'react';
import { createRoot } from 'react-dom/client'; // Updated import
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import ChatProvider from './Context/ChatProvider';
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    
      <ChakraProvider>
        <Router>
          <App />
        </Router>
      </ChakraProvider>
    
    </BrowserRouter>
  </React.StrictMode>
);
