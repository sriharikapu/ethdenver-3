import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
    const { id, weight } = this.props.offer
    return (
      <div style={style}>
        <p>Offer { id }</p>
        <p>Weight: { weight }</p>
        <Link to={`/minter/claim/${id}`}>Claim this offer</Link>
      </div>
    )
  }
}
