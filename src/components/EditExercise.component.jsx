import React, { useState, useEffect, useRef } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Axios from 'axios';
export default function CreateExercise(props) {

  const [userName, setUserName] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);
  const [id, setId] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    let data = {
      username: userName,
      description: description,
      duration: duration,
      date: date
    }
    console.log(data)
    Axios.post("http://localhost:5000/exercises/update/"+ props.match.params.id, data)
      .then(res => console.log(res.data))

    window.location = "/"
  }

  useEffect(() => {
    console.log(props)

    Axios.get("http://localhost:5000/exercises/" + props.match.params.id).then(res => {
      
      let date = new Date(res.data.date);
      setUserName(res.data.username);
      setDescription(res.data.description);
      setDuration(res.data.duration);
      setDate(date);
    })

    // //Get and set the users from server
    Axios.get("http://localhost:5000/users").then(res => {
      res.data.map((user) => {
        setUsers(prevState => [...prevState, user.username]);
      })
    })
  }, []);

  const userInput = useRef(null);

  return (
    <div>
      <h3>Edit Exercise Log</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <select
            ref={userInput}
            required={true}
            value={userName}
            className="form-control"
            onChange={(e) => {
              setUserName(e.target.value)
            }
            }
          >
            {users.length > 0 ?
              users.map(user => {
                return <option value={user} key={user}>{user}</option>
              })
              :
              <option disabled={true}>No users present</option>
            }
          </select>
        </div>

        <div className="form-group">
          <label>Description: </label>
          <input
            className="form-control"
            type="text"
            name="description"
            id="form-text-description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Duration: </label>
          <input
            className="form-control"
            type="number"
            name="description"
            id="form-text-duration"
            min={0}
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Date: </label>
          <DatePicker
            selected={date}
            onChange={setDate}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>

      </form>
    </div>
  )
}
