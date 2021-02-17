import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import './index.css';
import './prism.css';

// import ScrollToTop from './ScrollToTop';
import App from './App';

const routerBasename = process.env.REACT_APP_ROUTER_BASENAME || '/';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={routerBasename}>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
