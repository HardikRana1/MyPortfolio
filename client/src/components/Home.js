/* File: Services.css */
/* Student Name: Hardik Rana */
/* Student ID: 301379703 */
/* Date: 2024-05-25 */
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>Motivated and detail-oriented Software Engineer with 7+ years of full-stack and mobile application development. Expertise in designing scalable microservices, AI integration, and cloud deployments. Proficient in C++, Java, C#, Kotlin, Swift, TypeScript, Python, Node.js, React, GraphQL, MongoDB, and AWS services.  </p>
      <Link to="/about" className="btn">Learn More About Me</Link>
    </div>
  );
};

export default Home;
