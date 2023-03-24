import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import './index.css'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: 'Income',

    expenses: 0,
    income: 0,
    history: [],
  }

  updateTitle = event => {
    this.setState({title: event.target.value})
  }

  updateAmount = event => {
    this.setState({amount: event.target.value})
  }

  updateType = event => {
    const TYPE = event.target.value === 'INCOME' ? 'Income' : 'Expenses'
    this.setState({type: TYPE})
  }

  onClickDelete = async id => {
    const {history} = this.state

    const item = history.filter(each => each.id === id)

    if (item.type === 'Income') {
      await this.setState(prevState => ({
        income: prevState.income - item[0].Amount,
      }))
    } else {
      await this.setState(prevState => ({
        expenses: prevState.expenses - item[0].Amount,
      }))
    }

    const filteredList = history.filter(each => each.id !== id)
    this.setState({history: filteredList})
  }

  submitDetails = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    let Amount
    if (amount !== '') {
      Amount = parseInt(amount)
    } else {
      Amount = 0
    }

    this.setState(prevState => ({
      history: [...prevState.history, {id: uuidv4(), title, Amount, type}],
      income: type === 'Income' ? prevState.income + Amount : prevState.income,
      expenses:
        type === 'Expenses' ? prevState.expenses + Amount : prevState.expenses,

      title: '',
      amount: '',
    }))
  }

  render() {
    const {expenses, income, title, amount, history} = this.state
    return (
      <div className="bg-container">
        <div className="NameTab">
          <h1 className="heading">Hi, Richard</h1>
          <p>
            Welcome back to your <span>Money Manager</span>
          </p>
        </div>
        <MoneyDetails expenses={expenses} income={income} />
        <div className="TransactionBoxes">
          <form className="inputForm" onSubmit={this.submitDetails}>
            <h1 className="formHeading">Add Transaction</h1>
            <div className="inputBox">
              <label htmlFor="title">TITLE</label>
              <input
                onChange={this.updateTitle}
                type="text"
                id="title"
                placeholder="TITLE"
                value={title}
              />
            </div>
            <div className="inputBox">
              <label htmlFor="amount">AMOUNT</label>
              <input
                onChange={this.updateAmount}
                type="text"
                id="amount"
                placeholder="AMOUNT"
                value={amount}
              />
            </div>
            <div className="inputBox">
              <label htmlFor="type">TYPE</label>
              <select id="type" onChange={this.updateType}>
                {transactionTypeOptions.map(each => (
                  <option value={each.optionId} key={each.optionId}>
                    {each.displayText}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="AddButton">
              Add
            </button>
          </form>
          <div className="historyBox">
            <h1 className="formHeading">history</h1>
            <div className="historyTable">
              <p>Title</p>
              <p>Amount</p>
              <p>Type</p>
              <p> </p>
            </div>
            <ul className="historyList">
              {history.map(each => (
                <TransactionItem
                  onClickDelete={this.onClickDelete}
                  key={each.id}
                  details={each}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
