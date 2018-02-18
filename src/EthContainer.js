import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import getWeb3 from './utils/getWeb3'
import loadAccounts from './utils/loadAccounts'
import loadContract from './utils/loadContract'

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
      getWeb3.then(({ web3 }) => {
        loadAccounts.then(accounts => {
          loadContract.then(instance => {
            instance.owner().then(owner => {
              const accountType = owner === accounts[0] ? 'minter' : 'trader'
              this.setState({
                web3: web3,
                account: {
                  address: accounts[0],
                  type: accountType
                },
                yumInstance: instance
              })

              this.props.history.push(`/${accountType}`)
            })
          })
        })
      })
      .catch(err => {
        console.log(err)
      })

      this.setState({ auth: { ...this.state.auth, state: 'pending' }})
    }
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
    