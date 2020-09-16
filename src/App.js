import React, { Component } from 'react'
import TR from './components/TR'
import axios from 'axios'
// import './App.css'

class App extends Component {

  state = {
    employees: []
  }

  handleSearchEmployee = event => {
    event.preventDefault()
    axios.get(`https://randomuser.me/api?results=20`)
      .then(({ data }) => {
        let employees = JSON.parse(JSON.stringify(this.state.employees))
        this.setState({ employees: data.results })
        console.log(data)
        console.log(employees)
      })
      .catch(err => console.error(err))
  }

  render() {
    return (


      <>
        <h1>Employee Directory</h1>
        <button onClick={this.handleSearchEmployee}>Show All Employees</button>
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


      </>
    )
  }
}
export default App
