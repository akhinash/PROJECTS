import React, { useState } from 'react';

function BMI() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculate = (e) => {
    e.preventDefault();
    if (weight && height) {
      const h = height / 100;
      const result = (weight / (h * h)).toFixed(2);
      setBmi(result);
    }
  };

  return (
    <div className="container my-5">
      <h2>BMI Calculator</h2>
      <form onSubmit={calculate} className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Weight (kg)</label>
          <input type="number" className="form-control" value={weight} onChange={e => setWeight(e.target.value)} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Height (cm)</label>
          <input type="number" className="form-control" value={height} onChange={e => setHeight(e.target.value)} />
        </div>
        <div className="col-12">
          <button className="btn btn-primary">Calculate</button>
        </div>
      </form>
      {bmi && <p className="mt-3">Your BMI is <strong>{bmi}</strong></p>}
    </div>
  );
}

export default BMI;
