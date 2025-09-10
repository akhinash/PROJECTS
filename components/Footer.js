import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-3 mt-5">
      <div className="container">
        <p className="mb-0">© {new Date().getFullYear()} FitnessPro. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
