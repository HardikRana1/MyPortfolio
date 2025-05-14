/* File: Services.css */
/* Student Name: Hardik Rana */
/* Student ID: 301379703 */
/* Date: 2024-05-25 */
import React from 'react';
import './About.css';
import profilePic from '../assets/Profile.jpg';

const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <img src={profilePic} alt="Profile" />
      <p>
        Hello! I’m <strong>Hardik Rana</strong>, a Senior Software Engineer with over 7 years of experience
        architecting and building high-performance web applications. My passion lies at the intersection of
        front-end development, cloud operations, and cybersecurity—where I turn complex requirements into
        elegant, secure, and scalable solutions.
      </p>
      <h2>Why I Love Building Software</h2>
      <p>
        Every line of code is an opportunity to solve a real problem—whether that’s helping a non-profit
        manage events more efficiently or giving volunteers a way to meaningfully impact their community.
        I thrive on collaboration, continuous learning, and pushing systems to be faster, more reliable,
        and more secure.
      </p>
      <a href="/HardikRana_SoftwareEngineer.pdf" download="HardikRana_SoftwareEngineer.pdf">
        Download My Resume
      </a>
    </div>
  );
};

export default About;
