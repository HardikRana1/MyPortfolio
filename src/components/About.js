import React from 'react';
import './About.css';
import profilePic from '../assets/Profile.jpg';

const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <img src={profilePic} alt="Profile" />
      <p>Hello, my name is Hardik Rana. I am a Senior Software Engineer.</p>
      <a href="/HardikRana_SoftwareEngineer.pdf" download="HardikRana_SoftwareEngineer.pdf">
        Download My Resume
      </a>
    </div>
  );
};

export default About;
