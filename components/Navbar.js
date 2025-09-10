import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">FitnessPro</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/workouts">Workouts</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/bmi">BMI</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/calories">Calories</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/progress">Progress</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/classes">Classes</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/pricing">Pricing</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
