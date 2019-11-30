import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

//Import views
import Navbar from './components/Navbar.component';
import ExercisesList from './components/ExercisesList.component';
import EditExercise from './components/EditExercise.component';
import CreateExercise from './components/CreateExercise.component';
import CreateUser from './components/CreateUser.component';

function App() {

  return (
    <Router>
      <div className="container">
        <Navbar />
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" exact component={EditExercise} />
        <Route path="/create" exact component={CreateExercise} />
        <Route path="/user" exact component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
