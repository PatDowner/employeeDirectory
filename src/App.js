import React, { Component } from 'react'
import Card from './components/Card'
import axios from 'axios'
// import './App.css'

class App extends Component {

  state = {
    picture: '',
    title: '',
    first: '',
    last: '',
    email: '',
    // phone: '',
    // cell: '',
    // gender: '',
    // stateLoc: '',
    // country: '',
    employees: []
  }

  handleSearchEmployee = event => {
    event.preventDefault()
    axios.get(`https://randomuser.me/api?results=20`)
      .then(({ data }) => {
        let employees = JSON.parse(JSON.stringify(this.state.employees))
        employees.push(data.results)
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
        <div className="row">
          {
            this.state.employees.map(employee => <Card employee={employee} />)}
        </div>



      </>
    )
  }
}
export default App
