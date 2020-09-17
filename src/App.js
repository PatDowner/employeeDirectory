import React, { Component } from 'react'
import TR from './components/TR'
import axios from 'axios'
// import './App.css'


class App extends Component {

  state = {
    employees: []
  }

  componentDidMount() {
    axios.get(`https://randomuser.me/api?results=20`)
      .then(({ data }) => {
        this.setState({ employees: data.results })
      })
      .catch(err => console.error(err))
  }

  handleSort = event => {
    event.preventDefault()
    let employees = this.state.employees.sort((a, b) => (a.name.last > b.name.last) ? 1 : -1)
    this.setState({ employees: employees })
  }

  handleFilter = event => {
    event.preventDefault()
    console.log(event.target.value)
    axios.get(`https://randomuser.me/api?results=20&nat=${event.target.value}`)
      .then(({ data }) => {
        this.setState({ employees: data.results })
      })
      .catch(err => console.error(err))
  }

  render() {
    return (


      <>
        <div className="container-fluid">
          <h1>Employee Directory</h1>
          <br></br>
          <button className="btn btn-secondary d-inline" onClick={this.handleSort}>
            Sort by Last Name
            </button>
          <div className="dropdown d-inline">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Filter by Country
            </button>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <option className="dropdown-item" value="" onClick={this.handleFilter}>All Countries</option>
              <option className="dropdown-item" value="AU" onClick={this.handleFilter}>Australia</option>
              <option className="dropdown-item" value="BR" onClick={this.handleFilter}>Brazil</option>
              <option className="dropdown-item" value="CA" onClick={this.handleFilter}>Canada</option>
              <option className="dropdown-item" value="DK" onClick={this.handleFilter}>Denmark</option>
              <option className="dropdown-item" value="FI" onClick={this.handleFilter}>Finland</option>
              <option className="dropdown-item" value="FR" onClick={this.handleFilter}>France</option>
              <option className="dropdown-item" value="DE" onClick={this.handleFilter}>Germany</option>
              <option className="dropdown-item" value="IR" onClick={this.handleFilter}>Iran</option>
              <option className="dropdown-item" value="IE" onClick={this.handleFilter}>Ireland</option>
              <option className="dropdown-item" value="NL" onClick={this.handleFilter}>Netherlands</option>
              <option className="dropdown-item" value="NZ" onClick={this.handleFilter}>New Zealand</option>
              <option className="dropdown-item" value="NO" onClick={this.handleFilter}>Norway</option>
              <option className="dropdown-item" value="ES" onClick={this.handleFilter}>Spain</option>
              <option className="dropdown-item" value="CH" onClick={this.handleFilter}>Switzerland</option>
              <option className="dropdown-item" value="TR" onClick={this.handleFilter}>Turkey</option>
              <option className="dropdown-item" value="GB" onClick={this.handleFilter}>United Kingdom</option>
              <option className="dropdown-item" value="US" onClick={this.handleFilter}>United States</option>
            </div>
          </div>
          <br></br>

          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Picture</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Cell</th>
                <th scope="col">Gender</th>
                <th scope="col">Location</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.employees.map(employee => <TR employee={employee} />)
              }
            </tbody>
          </table>
        </div>


      </>
    )
  }
}
export default App
