import React, { useState, useEffect, useRef } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function CreateExercise() {

  const [userName, setUserName] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    let data = {
      username: userName,
      description: description,
      duration: duration,
      date: date
    }
    // window.location = "/";
    console.log(data)
  }

  useEffect(() => {
    //Set test data
    setUserName('test-user');
    setUsers(['test-user', 'garbage']);
  }, []);

  const userInput = useRef(null);

  return (
    <div>
      <h3>Create a New Exercise Log</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <select
            ref={userInput}
            required={true}
            value={userName}
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
          />
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary">Submit shit</button>
        </div>

      </form>
    </div>
  )
}
