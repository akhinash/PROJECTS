import React from 'react';

function Pricing() {
  return (
    <div className="container my-5">
      <h2 className="mb-4">Membership Pricing</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-header bg-primary text-light">Basic</div>
            <div className="card-body">
              <h3>$19/mo</h3>
              <ul className="list-unstyled">
                <li>Gym Access</li>
                <li>1 Class / Week</li>
              </ul>
              <button className="btn btn-outline-primary">Choose</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-header bg-success text-light">Pro</div>
            <div className="card-body">
              <h3>$39/mo</h3>
              <ul className="list-unstyled">
                <li>All Classes</li>
                <li>Personal Trainer</li>
              </ul>
              <button className="btn btn-outline-success">Choose</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-header bg-dark text-light">Premium</div>
            <div className="card-body">
              <h3>$59/mo</h3>
              <ul className="list-unstyled">
                <li>All Pro Features</li>
                <li>Diet Plan + 24/7 Support</li>
              </ul>
              <button className="btn btn-outline-dark">Choose</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
