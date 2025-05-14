/* File: Services.css */
/* Student Name: Hardik Rana */
/* Student ID: 301379703 */
/* Date: 2024-05-25 */
import React, { useState } from 'react';
import './Contact.css';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setFormData({
      firstName: '',
      lastName: '',
      contactNumber: '',
      email: '',
      message: '',
    });
    navigate('/'); // Redirect to home page
  };

  return (
    <div className="contact">
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p><strong>Email:</strong> hrana0124@gmail.com</p>
        <p><strong>Phone:</strong> +14374279892</p>
        <p><strong>Address:</strong> 1 MorningTon Gate, Scarborough, ON, Canada</p>
      </div>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="contactNumber"
          placeholder="Contact Number"
          value={formData.contactNumber}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
