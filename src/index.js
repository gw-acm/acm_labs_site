import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.react';
import { unregister } from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
unregister();
