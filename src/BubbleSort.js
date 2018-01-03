//@flow

import React, { Component } from 'react';
// JS: Make these proper npm package imports
import { bubbleSortFactory } from './bubble-sort/index.js'
import { gridDisplay } from './grid-display/index.js'
// CSS
import './BubbleSort.css';
import './grid-display/main.css';
import './grid-display/font-awesome/css/font-awesome.min.css';

class BubbleSort extends Component {
  render = () => {
    return (
     <div id="bubble-sort" className="viz"></div>
    );
  }

  // Config
 bubbleConf = {
    FPS: 10,
    MAX_SECONDS_TRANSITION_INTERVAL: .25,
    COLS: 4,
    ROWS: 4,
    SHOW_WORKING: false,
    LOOP: true,
    RELOAD_INTERVAL: 2000,
    CONSTANT_TRANSITION_SPEED: true,
    FINISH_COUNTER: {
      ALGORITHMS: [],
      COUNT: 0
    },
    CONTAINER_ID: 'bubble-sort'
  }
  componentDidMount = () => {

    // --------------------------------- //
    // SELECTION SORT
    // --------------------------------- //
    const bubbleSort = bubbleSortFactory(this.bubbleConf, gridDisplay)
    this.bubbleConf.FINISH_COUNTER.ALGORITHMS.push(bubbleSort)
    bubbleSort.run()
  }
}

export default BubbleSort;
