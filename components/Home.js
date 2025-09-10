import React from 'react';
import hero from '../assets/hero.jpg';
import './home.css';

function Home() {
  return (
    <div className="home">
      <div className="hero-section" style={{backgroundImage: `url(${hero})`}}>
        <div className="overlay">
          <h1>Welcome to FitnessPro</h1>
          <p>Your complete fitness management platform</p>
          <a href="/classes" className="btn btn-primary">Join Classes</a>
        </div>
      </div>
      <div className="container my-5">
        <h2>Why Choose Us</h2>
        <p>Track workouts, calculate BMI, manage calories, book classes, and monitor your progress all in one place.</p>
      </div>
    </div>
  );
}

export default Home;
