import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const submitForm = (e) => {
    e.preventDefault();
    alert(`Thanks ${form.name}, we’ll get back to you soon!`);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="container my-5">
      <h2>Contact Us</h2>
      <form onSubmit={submitForm} className="row g-3">
        <div className="col-md-6">
          <input className="form-control" placeholder="Name" value={form.name} onChange={e => setForm({...form, name:e.target.value})}/>
        </div>
        <div className="col-md-6">
          <input className="form-control" type="email" placeholder="Email" value={form.email} onChange={e => setForm({...form, email:e.target.value})}/>
        </div>
        <div className="col-12">
          <textarea className="form-control" rows="4" placeholder="Message" value={form.message} onChange={e => setForm({...form, message:e.target.value})}></textarea>
        </div>
        <div className="col-12">
          <button className="btn btn-primary">Send Message</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
