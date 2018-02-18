import React, { Component } from 'react'

import Dashboard from './Dashboard'
import Offer from '../shared/Offer'

export default class Home extends Component {
  render () {
    const offers = [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6'
    ]

    return (
      <div>
        <Dashboard />
        <div style={{ marginBottom: '3rem' }} />
        <h3>Featured Offers</h3>
        { offers.map(offer => <Offer id={offer} key={offer} />)}
      </div>
    )
  }
}
