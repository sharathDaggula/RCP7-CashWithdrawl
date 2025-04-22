// Cashwithdrawl/index.js

// Write your code here
import './index.css'

import {Component} from 'react'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  debitAmount = id => {
    let amtToDebit = null
    if (id === 1) {
      amtToDebit = 50
    } else if (id === 2) {
      amtToDebit = 100
    } else if (id === 3) {
      amtToDebit = 200
    } else {
      amtToDebit = 500
    }
    this.setState(prevState => ({amount: prevState.amount - amtToDebit}))
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="profile-container">
            <div className="profile-pic">
              <p className="profile-letter">S</p>
            </div>
            <h1 className="fullname">Sarah Williams</h1>
          </div>

          <div className="balance-container">
            <p className="balance-heading">Your Balance</p>
            <div className="amount-container">
              <p className="amount">{amount}</p>
              <p className="amount-description">In Rupees</p>
            </div>
          </div>

          <p className="withdraw">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="buttons-container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                key={eachItem.id}
                eachListItem={eachItem}
                debitAmount={this.debitAmount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal

// DenominationItem/index.js

















// Write your code here
import './index.css'

const DenominationItem = props => {
  const {eachListItem, debitAmount} = props
  const onDebit = () => {
    debitAmount(eachListItem.id)
  }
  const {value} = eachListItem
  return (
    <li>
      <button className="button" type="button" onClick={onDebit}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem

