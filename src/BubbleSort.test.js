import React from 'react'
import ReactDOM from 'react-dom'
import BubbleSort from './BubbleSort.js'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<BubbleSort />, div)
})
