import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { MyDemoAppApp } from './app';

ReactDOM.render((
  <BrowserRouter>
    <MyDemoAppApp />
  </BrowserRouter>
), document.getElementById('root'));

