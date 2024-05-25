import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>Mission Statement: Experienced Software Engineer with over 6 years of experience in building robust, large-scale applications. Proficient in Node.js and Express.js for backend development, adept at front-end development, skilled in C++ for Windows applications, and experienced in mobile application development using React Native. Specializes in database optimization to enhance performance. Possesses a collaborative mindset, with proven adaptability, time management skills and creative approaches to problem-solving.  </p>
      <Link to="/about" className="btn">Learn More About Me</Link>
    </div>
  );
};

export default Home;
