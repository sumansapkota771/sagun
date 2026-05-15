'use client';

import React from 'react';

const InquiryForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    
    // In a real app, you would send this to a backend or a service like Formspree
    console.log('Inquiry Received:', data);
    
    alert('Thank you! Your inquiry for ' + data.destination + ' has been received. Our team will contact you shortly via WhatsApp or Phone.');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="form-wrapper">
      <form id="inquiryForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Full Name</label>
          <input type="text" name="name" className="form-control" placeholder="Enter your full name" required />
        </div>
        <div className="form-grid-2">
          <div className="form-group">
            <label className="form-label">Phone Number</label>
            <input type="tel" name="phone" className="form-control" placeholder="e.g. 010-402004" required />
          </div>
          <div className="form-group">
            <label className="form-label">WhatsApp Number</label>
            <input type="tel" name="whatsapp" className="form-control" placeholder="e.g. 9803094437" required />
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">Preferred Destination</label>
          <select name="destination" className="form-control" required defaultValue="">
            <option value="" disabled>Select a destination</option>
            <option value="Japan">Japan</option>
            <option value="Finland">Finland</option>
            <option value="UK">United Kingdom</option>
            <option value="Undecided">Still Undecided</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Message (Optional)</label>
          <textarea name="message" className="form-control" rows={4} placeholder="Tell us a bit about your academic background or specific queries..."></textarea>
        </div>
        <button type="submit" className="btn btn-primary" style={{ width: '100%', fontSize: '1.125rem' }}>
          Request a Call Back
        </button>
      </form>
    </div>
  );
};

export default InquiryForm;
