// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, textResult} = props
  const {suggestion} = suggestionDetails
  const onText = () => {
    textResult(suggestion)
  }
  return (
    <div>
      <li className="list-container">
        <p>{suggestion}</p>
        <button className="button" type="button" onClick={onText}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
            alt="arrow"
            className="arrow-icon"
          />
        </button>
      </li>
    </div>
  )
}

export default SuggestionItem
