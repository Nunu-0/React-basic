import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './src/app';
import AuthService from './src/service/auth_service';

require('dotenv').config();
console.log(process.env);

const authService = new AuthService();

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService}/>
  </React.StrictMode>,
  document.getElementById('root')
);
