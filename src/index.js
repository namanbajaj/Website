import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#root')
);