// Write your code here
import './index.css'

const TransactionItem = props => {
  const {details, onClickDelete} = props
  const {id, title, amount, type} = details

  const deleteItem = () => {
    onClickDelete(id)
  }

  return (
    <li className="historyTable list">
      <p>{title}</p>
      <p>{amount}</p>
      <p>{type}</p>
      <button
        onClick={deleteItem}
        className="deleteButton"
        type="button"
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="deleteImg"
        />
      </button>
    </li>
  )
}

export default TransactionItem
