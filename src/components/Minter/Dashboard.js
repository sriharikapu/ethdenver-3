import React, { Component } from 'react'

const itemStyle = {
  display: 'inline-block',
  marginRight: '2rem'
}

export default class Dashboard extends Component {
  render () {
    return (
      <div>
        <button style={itemStyle}>Send tokens</button>

        <label htmlFor="offer-search" style={itemStyle}>Search offers:</label>
        <input type="search" style={itemStyle} />
      </div>
    )
  }
}
