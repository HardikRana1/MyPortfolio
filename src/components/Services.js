import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    { title: 'Web Development', description: 'Creating beautiful web experiences', image: 'path/to/webdev.jpg' },
    { title: 'Mobile Apps', description: 'Building functional mobile applications', image: 'path/to/mobile.jpg' },
    { title: 'General Programming', description: 'Solving complex problems with code', image: 'path/to/programming.jpg' },
  ];

  return (
    <div className="services">
      <h1>Services I Offer</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.title} />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
