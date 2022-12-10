import React, { Component } from 'react'
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'
import Board from './Board'

class App extends Component {
  render() {
    return (
      <div className="koffing-app">
        <AppHeader />
        <Board />
        <AppFooter />
      </div>
    )
  }
}

export default App
