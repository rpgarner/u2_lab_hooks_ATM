// NPM modules
import React from 'react'

// Custom Components
import Account from './components/Account'
import SavingsAccount from './components/SavingsAccount'
// Resources
import logo from './ga.png'
import './styles/App.css'

function App() {
  return (
    <div id="content">
      <div id="nav">
        <div id="logo">
          <img src={logo} alt="General Assembly logo" />
        </div>
        <div id="title">Bank of GA</div>
      </div>
      <Account name="Checking" />
      <SavingsAccount name="savings" />
      <div className="clear"></div>
    </div>
  )
}

export default App
