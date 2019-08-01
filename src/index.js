import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Application from './Application';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Application id="2" />, 
    document.getElementById('root'));


serviceWorker.unregister();
