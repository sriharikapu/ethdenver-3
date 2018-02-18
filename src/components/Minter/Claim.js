import React, { Component } from 'react'

import getWeb3 from '../../utils/getWeb3'
import loadAccounts from '../../utils/loadAccounts'
import loadContract from '../../utils/loadContract'

import offers from '../../data/offers'
import exchangeRate from '../../data/exchangeRate'

export default class Claim extends Component {
  constructor (props) {
    super(props)

    const { donorAddress, weight } = offers.filter(offer => offer.id === +props.match.params.id)[0]

    this.state = {
      donorAddress,
      weight,
      yum: exchangeRate(weight)
    }

    this.handleClaim = this.handleClaim.bind(this)
  }

  componentWillMount () {
    getWeb3.then(({ web3 }) => this.setState({ web3 }))
  }

  render () {
    const { donorAddress, weight, yum } = this.state

    return (
      <div>
        <p>Donor: { donorAddress }</p>
        <p>Weight: { weight }</p>
        <p>Yum Coin due: { yum }</p>
        <button onClick={this.handleClaim}>Confirm</button>
      </div>
    )
  }

  handleClaim () {
    const { donorAddress, weight, yum } = this.state

    loadAccounts.then(accounts => {
      const account = accounts[0]

      loadContract.then(instance => {
        instance.mint(donorAddress, yum, {from: account})
      })
    })
  }
}
