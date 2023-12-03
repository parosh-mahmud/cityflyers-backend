import React from 'react';
import { createRoot } from 'react-dom';
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Create a theme object
const theme = createTheme();

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Wrap your App component inside ThemeProvider and pass the theme object */}
      <ThemeProvider theme={theme}>
        <Router>
          <Provider store={store}>
            <App />
          </Provider>
        </Router>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
