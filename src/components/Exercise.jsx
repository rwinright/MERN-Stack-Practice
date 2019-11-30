import React from 'react'

export default function Exercise(props) {
  let date = new Date(props.activity.date);
  let month = date.getMonth().toString();
  let day = date.getDay().toString();
  let year = date.getFullYear().toString();
  let constructedDate = `${month.padStart(2, '0')}-${day.padStart(2, '0')}-${year}`;

  return <tr>
    <td>{props.activity.username}</td>
    <td>{props.activity.description}</td>
    <td>{props.activity.duration}</td>
    <td>{constructedDate}</td>
    <td><button className="btn btn-danger" onClick={() => (props.deleteExercise(props.activity._id))}>Delete</button></td>
  </tr>
}
