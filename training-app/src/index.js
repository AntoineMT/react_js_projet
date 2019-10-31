import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import LoginPage from './page/loginPage.js';

ReactDOM.render(<LoginPage />, document.getElementById('root'));
serviceWorker.unregister();
