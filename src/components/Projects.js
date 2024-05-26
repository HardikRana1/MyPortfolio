import React from 'react';
import './Projects.css';
import ecommerceImage from '../assets/E-commrence.jpg'
import fitnessAppImage from '../assets/FitnessAPP.jpg';
import dataAnalysisToolImage from '../assets/Data Analysis.jpg';

const Projects = () => {
  const projects = [
    {
      name: 'E-commerce Website',
      description: 'This project involved creating a fully functional e-commerce website using React for the frontend and Node.js for the backend. The website allows users to browse products, add them to their cart, and make secure payments.',
      technologies: ['React', 'Redux', 'Bootstrap', 'Node.js', 'Express.js', 'MongoDB', 'Stripe API'],
      role: 'Full-stack Developer',
      outcome: 'The website was successfully launched, and it handles over 1,000 transactions per month. Users praised the intuitive design and seamless user experience.',
      image: ecommerceImage,
    },
    {
      name: 'Fitness Tracking App',
      description: 'Developed a fitness tracking mobile application that helps users monitor their daily activities, workouts, and nutrition. The app includes features like goal setting, progress tracking, and workout recommendations.',
      technologies: ['React Native', 'Firebase', 'Firebase Auth', 'Google Analytics'],
      role: 'Mobile Developer',
      outcome: 'The app has been downloaded over 10,000 times on the Google Play Store and Apple App Store. Users have reported improved fitness levels and a better understanding of their health data.',
      image: fitnessAppImage,
    },
    {
        name: 'Web-based Data Analysis Tool',
        description: 'Developed a web-based data analysis tool that simplifies the process of analyzing large datasets. The tool allows users to upload data from various sources, clean and preprocess it, perform statistical analysis, and generate comprehensive reports directly from their browser.',
        technologies: ['Node.js', 'Express', 'MongoDB', 'D3.js', 'Bootstrap', 'JavaScript'],
        role: 'Full-stack Developer',
        outcome: 'The web application has streamlined data analysis tasks, reducing the time required from days to hours. It has been widely adopted by several departments within the organization, enhancing efficiency and enabling more accurate data-driven decision-making.',
        image: dataAnalysisToolImage,
      },
      
  ];

  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.name} />
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <p><strong>Technologies Used:</strong> {project.technologies.join(', ')}</p>
            <p><strong>Role:</strong> {project.role}</p>
            <p><strong>Outcome:</strong> {project.outcome}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
