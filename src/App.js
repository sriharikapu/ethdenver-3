import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import AccountContainer from './AccountContainer'

import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'

class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          <nav className="navbar pure-menu pure-menu-horizontal">
              <a href="#" className="pure-menu-heading pure-menu-link">YUM</a>
          </nav>
          <main className="container">
            <div className="pure-g">
              <div className="pure-u-1-1">
                <Route component={AccountContainer} />
              </div>
            </div>
          </main>
        </div>
      </Router>
    )
  }
}

export default App
