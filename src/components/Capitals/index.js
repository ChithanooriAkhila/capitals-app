import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {country: 'India'}

  capitalCountry = event => {
    const filteredObject = countryAndCapitalsList.filter(
      item => event.target.value === item.id,
    )
    this.setState({country: filteredObject[0].country})
  }

  render() {
    const {country} = this.state
    return (
      <div className="bg-container">
        <div className="main-container">
          <h1>Countries and Capitals</h1>
          <select id="capitalsAnsCountries" onChange={this.capitalCountry}>
            {countryAndCapitalsList.map(eachItem => (
              <option value={eachItem.id} key={eachItem.id}>
                {eachItem.capitalDisplayText}
              </option>
            ))}
          </select>
          <label htmlFor="capitalsAnsCountries">
            is capital of which country?
          </label>
          <h1>{country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
