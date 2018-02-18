import React, { Component } from 'react'

// import getWeb3 from '../../utils/getWeb3'
import loadAccounts from '../../utils/loadAccounts'
import loadContract from '../../utils/loadContract'

export default class Trader extends Component {
  constructor (props) {
    super(props)

    this.state = {
      balance: null
    }
  }

  componentWillMount () {
    loadAccounts.then(accounts => {
      const account = accounts[0]

      loadContract.then(instance => {
        instance.balanceOf(account).then(balance => {
          this.setState({ balance })
        })
      })
    })
  }

  render () {
    return (
      <div>
        <h1>Trader</h1>
        <p>Yum balance: { (this.state.balance && this.state.balance.toString()) || '' }</p>
      </div>
    )
  }
}
