import React from 'react';
import './Projects.css';
import ecommerceImage from '../assets/E-commrence.jpg'
import fitnessAppImage from '../assets/FitnessAPP.jpg';
import dataAnalysisToolImage from '../assets/Data Analysis.jpg';

const Projects = () => {
  const projects = [
    {
      name: 'AI-Driven Community Platform',
      description: 'Designed and developed a full-stack platform connecting residents, businesses, and organizers through AI-enhanced community features. Enabled volunteer matching, event optimization, and discussion summarization using federated microservices and AI integration.',
  
      technologies: [
        'Node.js',
        'Express.js',
        'Apollo Federation',
        'React',
        'Apollo Client',
        'LangChain',
        'Google Gemini',
        'MongoDB',
        'AWS (EC2, S3, Elastic Beanstalk)',
      ],
       role: 'Full-Stack Developer & Cloud Architect',
      outcome:  'Successfully deployed a scalable, secure community platform on AWS with role-based interfaces and AI-powered insights, enhancing user engagement and volunteer coordination.',
      image: ecommerceImage,
    },
    {
      name: 'Cross-Platform Mobile Applications',
      description: 'Built secure, responsive mobile applications for both Android and iOS platforms using Kotlin, Swift, and React Native. Implemented real-time features, secure authentication, and modern UI/UX patterns with efficient local and remote data storage.',
      technologies: [
        'Kotlin',
        'Swift',
        'React Native',
        'Firebase',
        'REST APIs',
        'JWT',
        'OAuth2',
        'CoreData',
        'Dagger/Hilt',
      ],
      role: 'Mobile Application Developer',
      outcome:
        'Developed and launched robust mobile solutions used in academic and enterprise settings. Focused on performance, scalability, and user data protection with secure token-based auth and native async handling.',
      image: fitnessAppImage,
    },
    {
        name: 'Cloud-Based Streaming & Image Processing System',
      description:
        'Engineered secure streaming services and optimized playout solutions for media delivery. Leveraged C++, FFMPEG, and OpenCV to enhance real-time video/audio streaming and image processing performance in a broadcast-grade environment.',
      technologies: [
        'C++',
        'FFMPEG',
        'OpenCV',
        'MySQL',
        'JavaScript',
        'Angular',
        'AWS',
        'TCP/UDP',
      ],
      role: 'Senior Software Engineer',
      outcome:
        'Enabled reliable real-time content streaming and data analysis across distributed systems. Contributed to stable deployments, secure media delivery, and improved cross-team coordination in a production setting.',
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
