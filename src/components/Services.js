/* File: Services.css */
/* Student Name: Hardik Rana */
/* Student ID: 301379703 */
/* Date: 2024-05-25 */
import React from 'react';
import './Services.css';
import webdevImage from '../assets/webdev.jpg'; 
import mobileImage from '../assets/mobile.jpg';
import windowsImage from '../assets/windows.jpg';

const Services = () => {
  const services = [
    { 
        title: 'Full-Stack & Microservices Development',
      description:
        'Architect scalable web and microservice architectures using React, Node.js, Express, Apollo GraphQL, and MongoDB. I build maintainable front-end and back-end systems, integrate federated services, and ensure seamless API communication.',
      image: webdevImage 
    },
    { 
      title: 'Mobile & Native App Development',
      description:
        'Design and develop high-performance mobile applications for iOS and Android. Expertise in Kotlin, Swift, and React Native with modern patterns (MVVM, DI) and secure authentication (OAuth2, JWT), plus real-time data sync via Firebase.',
     image: mobileImage 
    },
    { 
    title: 'AI, Cloud & DevOps Solutions',
      description:
        'Integrate AI capabilities with Google Gemini and LangChain, deploy on AWS (EC2, S3, Elastic Beanstalk), and automate CI/CD pipelines with Docker and GitHub Actions. Enhance reliability, security, and scalability.',
      image: windowsImage 
    },
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
