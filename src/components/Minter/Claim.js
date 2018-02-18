import React, { Component } from 'react'

import offers from '../../data/offers'
import exchangeRate from '../../data/exchangeRate'

export default class Claim extends Component {
  render () {
    const { donorAddress, weight } = offers.filter(offer => offer.id === this.props.match.params.id)[0]
    return (
      <div>
        <p>From: { donorAddress }</p>
        <p>Weight: { weight }</p>
        <p>Yum Coin due: { exchangeRate(weight) }</p>
        <button>Confirm</button>
      </div>
    )
  }
}
