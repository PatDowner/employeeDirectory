import React, { Component } from 'react'
import TR from './components/TR'
// import Dropdown from './components/Dropdown'
import Jumbotron from './components/Jumbotron'
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

  render() {
    return (


      <>
        <div className="container-fluid">
          <Jumbotron />

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
