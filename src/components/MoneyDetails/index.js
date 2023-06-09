// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {expenses, income} = props

  return (
    <div className="MoneyDetails">
      <div className="detailsBox green">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div className="propBox">
          <p className="propName">Your Balance</p>
          <p data-testid="balanceAmount" className="property">{`Rs ${
            income - expenses
          }`}</p>
        </div>
      </div>
      <div className="detailsBox blue">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
          alt="income"
          className="image"
        />
        <div className="propBox">
          <p className="propName">Your Income</p>
          <p
            data-testid="incomeAmount"
            className="property"
          >{`Rs ${income}`}</p>
        </div>
      </div>
      <div className="detailsBox purple">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
          alt="expenses"
          className="image"
        />
        <div className="propBox">
          <p className="propName">Your Expenses</p>
          <p
            data-testid="expensesAmount"
            className="property"
          >{`Rs ${expenses}`}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
