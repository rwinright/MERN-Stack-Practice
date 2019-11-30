import React, { useState } from 'react'
import Axios from 'axios'

export default function CreateUser() {

  const [userName, setUserName] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      username: userName
    }

    //Axios post request to server
    Axios.post("http://localhost:5000/users/add", data)
      .then(res => {
        console.log(res.data)
      })

    setUserName("")
  }



  return (
    <div>
      <h3>Create New User</h3>

      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <input
            type="text"
            className="form-control"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Submit User</button>
        </div>
      </form>
    </div>
  )
}
