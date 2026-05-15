'use client';

import React, { useState } from 'react';
import { submitInquiry } from '@/app/actions';

const InquiryForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const formData = new FormData(e.target as HTMLFormElement);
    
    try {
      const result = await submitInquiry(formData);
      
      if (result.success) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your inquiry has been received. Our team will contact you shortly.'
        });
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus({
          type: 'error',
          message: result.error || 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'An unexpected error occurred. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form-wrapper">
      {status && (
        <div className={`alert alert-${status.type}`} style={{ 
          padding: '15px', 
          marginBottom: '20px', 
          borderRadius: '8px',
          backgroundColor: status.type === 'success' ? '#d4edda' : '#f8d7da',
          color: status.type === 'success' ? '#155724' : '#721c24',
          border: `1px solid ${status.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`,
          textAlign: 'center'
        }}>
          {status.message}
        </div>
      )}
      
      <form id="inquiryForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Full Name</label>
          <input type="text" name="name" className="form-control" placeholder="Enter your full name" required disabled={isSubmitting} />
        </div>
        <div className="form-grid-2">
          <div className="form-group">
            <label className="form-label">Phone Number</label>
            <input type="tel" name="phone" className="form-control" placeholder="e.g. 010-402004" required disabled={isSubmitting} />
          </div>
          <div className="form-group">
            <label className="form-label">WhatsApp Number</label>
            <input type="tel" name="whatsapp" className="form-control" placeholder="e.g. 9803094437" required disabled={isSubmitting} />
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">Preferred Destination</label>
          <select name="destination" className="form-control" required defaultValue="" disabled={isSubmitting}>
            <option value="" disabled>Select a destination</option>
            <option value="Japan">Japan</option>
            <option value="Finland">Finland</option>
            <option value="UK">United Kingdom</option>
            <option value="Undecided">Still Undecided</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Message (Optional)</label>
          <textarea name="message" className="form-control" rows={4} placeholder="Tell us a bit about your academic background or specific queries..." disabled={isSubmitting}></textarea>
        </div>
        <button 
          type="submit" 
          className="btn btn-primary" 
          style={{ 
            width: '100%', 
            fontSize: '1.125rem',
            opacity: isSubmitting ? 0.7 : 1,
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px'
          }}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <i className="fas fa-spinner fa-spin"></i> Sending...
            </>
          ) : (
            'Request a Call Back'
          )}
        </button>
      </form>
    </div>
  );
};

export default InquiryForm;
