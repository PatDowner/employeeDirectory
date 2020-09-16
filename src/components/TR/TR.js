import React from 'react'

const TR = (props) => {
  return (
    <tr>
      <td><img src={props.employee.picture.large} className="card-img-top" alt="..." /></td>
      <td>{props.employee.name.title} {props.employee.name.first} {props.employee.name.last}</td>
      <td>{props.employee.email}</td>
      <td>{props.employee.phone}</td>
      <td>{props.employee.cell}</td>
      <td>{props.employee.gender}</td>
      <td>{props.employee.location.city}, {props.employee.location.state}, {props.employee.location.country}</td>
    </tr>
  )
}

export default TR

