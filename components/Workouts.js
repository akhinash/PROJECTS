import React from 'react';
import './workouts.css';

const workouts = [
  { name: 'Full Body Workout', desc: '30 mins – all major muscles', img: 'https://via.placeholder.com/300x200' },
  { name: 'Cardio Blast', desc: '20 mins high intensity cardio', img: 'https://via.placeholder.com/300x200' },
  { name: 'Strength Training', desc: '40 mins weights + resistance', img: 'https://via.placeholder.com/300x200' },
];

function Workouts() {
  return (
    <div className="container my-5">
      <h2 className="mb-4">Workout Plans</h2>
      <div className="row">
        {workouts.map((w, idx) => (
          <div className="col-md-4 mb-3" key={idx}>
            <div className="card h-100">
              <img src={w.img} className="card-img-top" alt={w.name} />
              <div className="card-body">
                <h5 className="card-title">{w.name}</h5>
                <p className="card-text">{w.desc}</p>
                <button className="btn btn-primary">Start</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Workouts;
