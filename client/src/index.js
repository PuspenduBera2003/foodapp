import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SnackBarState from './contexts/SnackBar/SnackBarState';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <SnackBarState>
      <div className='app'>
        <App />
      </div>
    </SnackBarState>
  </React.StrictMode>
);