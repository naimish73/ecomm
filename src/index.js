// react imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
} from 'react-router-dom';

// image and other library imports

// css imports

// pages imports
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
