import React from 'react';
import { browserRouter as Router, Route } from "react-router-dom";

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

//Import views

function App() {

  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" exact component={EditExercise} />
      <Route path="/create" exact component={CreateExercise} />
      <Route path="/user" exact component={CreateUser} />
    </Router>
  );
}

export default App;
