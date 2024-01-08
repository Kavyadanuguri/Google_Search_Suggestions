// Write your code here

import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  textResult = suggestion => {
    this.setState({searchInput: suggestion})
  }

  searchValue = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResult = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="image"
          />
          <div className="container1">
            <div className="con1">
              <img
                className="search-icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
              />

              <input
                className="input-element"
                type="search"
                value={searchInput}
                placeholder="Search Google"
                onChange={this.searchValue}
              />
            </div>
            <ul>
              {searchResult.map(each => (
                <SuggestionItem
                  suggestionDetails={each}
                  key={each.id}
                  textResult={this.textResult}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
