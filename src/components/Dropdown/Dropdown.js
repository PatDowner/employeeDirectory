import React, { Component } from 'react'
import axios from 'axios'


class Dropdown extends Component {

  render() {


    return (
      <>
        <div className="dropdown d-inline">
          <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Filter by Country
            </button>

          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <option className="dropdown-item" value="" onClick={this.props.handleFilter}>All Countries</option>
            <option className="dropdown-item" value="AU" onClick={this.props.handleFilter}>Australia</option>
            <option className="dropdown-item" value="BR" onClick={this.props.handleFilter}>Brazil</option>
            <option className="dropdown-item" value="CA" onClick={this.props.handleFilter}>Canada</option>
            <option className="dropdown-item" value="DK" onClick={this.props.handleFilter}>Denmark</option>
            <option className="dropdown-item" value="FI" onClick={this.props.handleFilter}>Finland</option>
            <option className="dropdown-item" value="FR" onClick={this.props.handleFilter}>France</option>
            <option className="dropdown-item" value="DE" onClick={this.props.handleFilter}>Germany</option>
            <option className="dropdown-item" value="IR" onClick={this.props.handleFilter}>Iran</option>
            <option className="dropdown-item" value="IE" onClick={this.props.handleFilter}>Ireland</option>
            <option className="dropdown-item" value="NL" onClick={this.props.handleFilter}>Netherlands</option>
            <option className="dropdown-item" value="NZ" onClick={this.props.handleFilter}>New Zealand</option>
            <option className="dropdown-item" value="NO" onClick={this.props.handleFilter}>Norway</option>
            <option className="dropdown-item" value="ES" onClick={this.props.handleFilter}>Spain</option>
            <option className="dropdown-item" value="CH" onClick={this.props.handleFilter}>Switzerland</option>
            <option className="dropdown-item" value="TR" onClick={this.props.handleFilter}>Turkey</option>
            <option className="dropdown-item" value="GB" onClick={this.props.handleFilter}>United Kingdom</option>
            <option className="dropdown-item" value="US" onClick={this.props.handleFilter}>United States</option>
          </div>
        </div>
      </>
    )
  }
}
export default Dropdown