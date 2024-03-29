// @flow

import React, { Component } from 'react'
// JS: Make these proper npm package imports
import { bubbleSortFactory } from './bubble-sort/index.js'
import { gridDisplay } from './grid-display/index.js'
// CSS
import './BubbleSort.css'
import './grid-display/main.css'
import './grid-display/font-awesome/css/font-awesome.min.css'

// NOTE: the actual type of ALGORITHMS and COUNT don't have any effect
/*::
type Props = {
  containerId: string,
  finishCounter: {
    ALGORITHMS: Array<Object>,
    COUNT: number
  }
}
*/

class BubbleSort extends Component<Props> { // Can't work out comment syntax for <Props>
  props /*: Props */
  render = () => {
    return (
      <div id={this.props.containerId} className="viz bubble-sort"></div>
    )
  }

  componentDidMount = () => {
    // Config
    const bubbleConf = {
      FPS: 10,
      MAX_SECONDS_TRANSITION_INTERVAL: 1,
      COLS: 4,
      ROWS: 4,
      SHOW_WORKING: true,
      LOOP: true,
      RELOAD_INTERVAL: 2000,
      CONSTANT_TRANSITION_SPEED: true,
      FINISH_COUNTER: this.props.finishCounter,
      CONTAINER_ID: this.props.containerId
    }
    // --------------------------------- //
    // SELECTION SORT
    // --------------------------------- //
    const bubbleSort = bubbleSortFactory(bubbleConf, gridDisplay)
    // I shouldn't, but I am. Adding this algorithm  to the FINISH_COUNTER.ALGORITHMS prop
    bubbleConf.FINISH_COUNTER.ALGORITHMS.push(bubbleSort)
    bubbleSort.run()
  }
}

export default BubbleSort
