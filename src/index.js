import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { CookiesProvider } from 'react-cookie';



// router
const BrowserRouter = require('react-router-dom').BrowserRouter;

ReactDOM.render(
    <CookiesProvider>
        <BrowserRouter>   
            <App />
        </BrowserRouter>
    </CookiesProvider>, 
        
document.getElementById('root'))