import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Endow from './pages/Endow';
import Test from './pages/test'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
  <App/>

  </BrowserRouter>
);


