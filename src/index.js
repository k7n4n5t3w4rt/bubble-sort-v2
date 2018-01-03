import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import BubbleSort from './BubbleSort.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BubbleSort />, document.getElementById('root'));
registerServiceWorker();
