import React from 'react';
import ReactDOM from 'react-dom';
import BubleSort from './BubbleSort.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BubbleSort />, div);
});
