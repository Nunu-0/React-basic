import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service';
import dotenv from "dotenv";

const webpack = require("webpack")
const dotenv = require("dotenv");
dotenv.config();

const authService = new AuthService();
console.log(process.env.REACT_APP_FIREBASE_API_KEY);

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService}/>
  </React.StrictMode>,
  document.getElementById('root')
);
