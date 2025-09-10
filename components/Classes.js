import React from 'react';

const classes = [
  { name: 'Yoga', time: 'Mon 7am', instructor: 'Anna' },
  { name: 'HIIT', time: 'Wed 6pm', instructor: 'John' },
  { name: 'Zumba', time: 'Fri 5pm', instructor: 'Sara' },
];

function Classes() {
  return (
    <div className="container my-5">
      <h2>Available Classes</h2>
      <div className="row">
        {classes.map((c, idx) => (
          <div className="col-md-4 mb-3" key={idx}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{c.name}</h5>
                <p className="card-text">Time: {c.time}<br/>Instructor: {c.instructor}</p>
                <button className="btn btn-primary">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Classes;
