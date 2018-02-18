import React, { Component } from 'react'

export default class Mint extends Component {
  render () {
    return (
      <div>
        <form>
          <label>Address</label>
          <input type="text" />

          <label>Amount</label>
          <input type="text" />
        </form>
      </div>
    )
  }
}