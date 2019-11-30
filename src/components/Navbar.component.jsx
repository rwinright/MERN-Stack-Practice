import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
      <Link to="/" className="navbar-brand">ExcerTracker</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Exercises</Link>
          </li>
          <li className="nav-item">
            <Link to="/create" className="nav-link">Create Exercise</Link>
          </li>
          <li className="nav-item">
            <Link to="/user" className="nav-link">Create User</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
