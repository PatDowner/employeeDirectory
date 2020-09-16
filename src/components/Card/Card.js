import React from 'react'

const Card = (props) => {
  return (
    <div className="col-4">
      <img src={props.employee.picture.large} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.employee.name.title} {props.employee.name.first} {props.employee.name.last}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li value={props.employee.email} className="list-group-item"><b>Email:</b> {props.employee.email}</li>
        <li className="list-group-item"><b>Phone:</b> {props.employee.phone}</li>
        <li className="list-group-item"><b>Cell:</b> {props.employee.cell}</li>
        <li className="list-group-item"><b>Gender:</b> {props.employee.gender}</li>
        <li className="list-group-item"><b>Location</b> {props.employee.location.city}, {props.employee.location.state}, {props.employee.location.country}</li>
      </ul>
    </div>
  )
}

export default Card

