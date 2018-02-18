import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import MinterHome from './Home'
import MinterClaim from './Claim'

const processes = {
  home: MinterHome,
  claim: MinterClaim,
  // search: Search
}

export default class Minter extends Component {
  // componentWillUpdate (nextProps, nextState) {
  //   if (this.state.process !== nextState.process) {
  //     if (nextState.process === 'claim')
  //       this.props.location.push(`${this.props.match.url}/claim/${nextState.process.claim.id}`)
  //     else
  //       this.props.location.push(`${this.props.match.url}/${nextState.process}`)
  //   }
  // }

  render () {
    return (
      <div>
        <h1>Minter</h1>
        <Switch>
          <Route path={`${this.props.match.url}/claim/:id`} component={MinterClaim} />
          <Route component={MinterHome} />
        </Switch>
      </div>
    )
  }
}
