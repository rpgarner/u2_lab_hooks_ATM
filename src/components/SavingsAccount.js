import React, { useState } from 'react'
import '../styles/App.css'

const SavingsAccount = (props) => {
  let [amount, setAmount] = useState(0)
  let [balance, setBalance] = useState(0)

  const handleClick = (e) => {
    e.preventDefault()
    if ((isNaN(amount)) || (amount < 0)) {
      console.log('Not a number')
    } else {
      setBalance(balance + Number(amount))
    }
    setAmount(0)
  }

  const anotherClick = (e) => {
    e.preventDefault()
    if ((isNaN(amount)) || (amount > balance) || (amount < 0)) {
      console.log('You dont have enough money')
    } else {
      setBalance(balance - Number(amount))
    }
    setAmount(0)
  }

  let balanceClass = 'balance'
  if (balance <= 0) {
    balanceClass += ' zero'
  }

  return (
    <div className="account">
      <h2>{props.name}</h2>
      <div className={balanceClass}>${balance}</div>
      <br />
      <div>
        <input
          className="input"
          type="text"
          placeholder="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <br />
        <br />
        <input
          className="btn"
          type="submit"
          value="Deposit"
          onClick={handleClick}
        />
        <input
          className="btn"
          type="submit"
          value="Withdraw"
          onClick={anotherClick}
          />
      </div>
    </div>
  )
}

export default SavingsAccount