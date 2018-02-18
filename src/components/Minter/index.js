import React, { Component } from 'react'

import Home from './Home'
import Mint from './Mint'

const processes = {
  home: Home,
  mint: Mint,
  // search: Search
}

export default class Minter extends Component {
  constructor (props) {
    super(props)

    this.state = {
      process: 'home'
    }
  }

  render () {
    const Process = processes[this.state.process]

    return (
      <div>
        <h1>Minter</h1>
        <Process />
      </div>
    )
  }
}
