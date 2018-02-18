import React, { Component } from 'react'

import Dashboard from './Dashboard'
import Offer from '../shared/Offer'

import offers from '../../data/offers'

export default class Home extends Component {
  render () {
    console.log(this.props)
    return (
      <div>
        <Dashboard />
        <div style={{ marginBottom: '3rem' }} />
        <h3>Featured Offers</h3>
        { offers.map(offer => <Offer offer={offer} key={offer.id} />)}
      </div>
    )
  }
}
