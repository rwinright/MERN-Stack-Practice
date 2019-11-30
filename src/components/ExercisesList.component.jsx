import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Exercise from './Exercise';

export default function ExercisesList() {

  const [exercises, setExercises] = useState([]);

  useEffect(() => {


    Axios.get('http://localhost:5000/exercises')
      .then(res => {
        setExercises(res.data);
      }).catch(err => console.log(err))
  }, []);

  const deleteExercise = (id) => {
    Axios.delete("http://localhost:5000/exercises/" + id)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
    // console.log(id)
    //Set the exercises to the IDs that does not equal the passed argument.
    setExercises(exercises.filter(el => el._id !== id));
  }

  return (
    <div>
      <h3>Logged Exercises</h3>
      <table className="table">
        <thead className="thead light">
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {

            exercises.map((exercise, i) => {
              return (
                <Exercise activity={exercise} deleteExercise={deleteExercise} key={i}/>
              )
            })

          }
        </tbody>
      </table>
    </div>
  )
}
