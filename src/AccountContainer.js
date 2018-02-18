import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import getWeb3 from './utils/getWeb3'

// import FoodCreditContract from '../build/contracts/FoodCredit.json'

import Loading from './components/Loading'
import Minter from './components/Minter'
import Trader from './components/Trader'

export default class AccountContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      web3: null,
      auth: {
        state: null,
        account: null
      }
    }
  }

  componentWillMount () {
    if (!this.state.auth.state) {
      if (this.props.location.pathname !== '/') this.props.history.push('/')

      // Get network provider and web3 instance.
      // See utils/getWeb3 for more info.
      getWeb3
      .then(results => {
        this.loadAccount(results.web3).then(accounts => {
          this.setState({
            web3: results.web3,
            account: accounts[0]
          })

          this.props.history.push('/minter')
        })
      })
      .catch(() => {
        console.log('Error finding web3.')
      })

      this.setState({ auth: { ...this.state.auth, state: 'pending' }})

    }
  }

  // loadContract () {
    // const contract = require('truffle-contract')
    // const foodCredit = contract(FoodCreditContract)

    // foodCredit.setProvider(this.state.web3.currentProvider)

    // const simpleStorage = contract(SimpleStorageContract)
    // simpleStorage.setProvider(this.state.web3.currentProvider)

    // // Declaring this for later so we can chain functions on SimpleStorage.
    // var simpleStorageInstance

    // // Get accounts.
    // this.state.web3.eth.getAccounts((error, accounts) => {
    //   simpleStorage.deployed().then((instance) => {
    //     simpleStorageInstance = instance

    //     // Stores a given value, 5 by default.
    //     return simpleStorageInstance.set(5, {from: accounts[0]})
    //   }).then((result) => {
    //     // Get the value from the contract to prove it worked.
    //     return simpleStorageInstance.get.call(accounts[0])
    //   }).then((result) => {
    //     // Update state with the result.
    //     return this.setState({ storageValue: result.c[0] })
    //   })
    // })
  // }

  loadAccount (web3) {
    return new Promise((resolve, reject) => {
      web3.eth.getAccounts((error, accounts) => {
        if (error) reject(error)
        resolve(accounts)
      })
    })
  }

  render () {
    return (
      <Switch>
        <Route path="/minter" component={Minter} />
        <Route path="/trader" component={Trader} />
        <Route component={Loading} />
      </Switch>
    )
  }
}
    