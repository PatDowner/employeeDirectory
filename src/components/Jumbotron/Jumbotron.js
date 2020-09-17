import React, { Component } from 'react'
import Dropdown from '../Dropdown'
import './Jumbotron.css'

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron text-center">
        <h1 className="display-4">Employee Directory</h1>
        <p className="lead">This is a simple app to view and filter employee directory records built using React.</p>
        <hr className="my-4" />
        <div className="d-flex justify-content-around">
          <button className="btn btn-primary d-inline" value="last" onClick={this.props.handleSort}>Sort by Last Name</button>
          <Dropdown handleFilter={this.props.handleFilter}/>
        </div>
      </div>
    )
  }
}

export default Jumbotron