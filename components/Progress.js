import React, { useState } from 'react';

function Progress() {
  const [weightEntries, setWeightEntries] = useState([]);
  const [weight, setWeight] = useState('');

  const addEntry = (e) => {
    e.preventDefault();
    if (weight) {
      setWeightEntries([...weightEntries, { date: new Date().toLocaleDateString(), weight: Number(weight) }]);
      setWeight('');
    }
  };

  return (
    <div className="container my-5">
      <h2>Progress Tracker</h2>
      <form onSubmit={addEntry} className="row g-3 mb-4">
        <div className="col-md-10">
          <input className="form-control" type="number" placeholder="Weight (kg)" value={weight} onChange={e => setWeight(e.target.value)} />
        </div>
        <div className="col-md-2">
          <button className="btn btn-primary w-100">Add</button>
        </div>
      </form>
      <table className="table table-striped">
        <thead>
          <tr><th>Date</th><th>Weight (kg)</th></tr>
        </thead>
        <tbody>
          {weightEntries.map((entry, idx) => (
            <tr key={idx}><td>{entry.date}</td><td>{entry.weight}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Progress;
