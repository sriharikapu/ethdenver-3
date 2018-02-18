import React, { Component } from 'react'

const style = {
  background: '#ddd',
  display: 'inline-block',
  height: '15rem',
  marginBottom: '.5rem',
  marginRight: '.5rem',
  padding: '1rem',
  width: '15rem'
}

export default class Offer extends Component {
  render () {
    return (
      <div style={style}>
        <p>Offer { this.props.id }</p>
      </div>
    )
  }
}
