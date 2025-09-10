import React, { useState } from 'react';

function CalorieTracker() {
  const [food, setFood] = useState('');
  const [calories, setCalories] = useState('');
  const [items, setItems] = useState([]);

  const addItem = (e) => {
    e.preventDefault();
    if (food && calories) {
      setItems([...items, { food, calories: Number(calories) }]);
      setFood('');
      setCalories('');
    }
  };

  const totalCalories = items.reduce((acc, curr) => acc + curr.calories, 0);

  return (
    <div className="container my-5">
      <h2>Calorie Tracker</h2>
      <form onSubmit={addItem} className="row g-3 mb-4">
        <div className="col-md-5">
          <input className="form-control" placeholder="Food Item" value={food} onChange={e => setFood(e.target.value)} />
        </div>
        <div className="col-md-5">
          <input className="form-control" type="number" placeholder="Calories" value={calories} onChange={e => setCalories(e.target.value)} />
        </div>
        <div className="col-md-2">
          <button className="btn btn-primary w-100">Add</button>
        </div>
      </form>
      <ul className="list-group">
        {items.map((item, idx) => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={idx}>
            {item.food}
            <span className="badge bg-primary">{item.calories} kcal</span>
          </li>
        ))}
      </ul>
      <div className="mt-3">
        <strong>Total Calories: {totalCalories} kcal</strong>
      </div>
    </div>
  );
}

export default CalorieTracker;
