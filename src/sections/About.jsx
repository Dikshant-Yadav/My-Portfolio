import React from 'react';
import './About.css';
import profileBackground from '../assets/profile.jpg';

const About = () => {
  return (
    <div
      className="about-bg"
      style={{ backgroundImage: `url(${profileBackground})` }}
    >
      <div className="about-overlay">
        <div className="about-text">
          <h2>Hey, I'm Dikshant;</h2>
          <h3>FullStack Developer 
            • Undergrad 
            • Tech Explorer</h3>
          <p>
            I’m a pre-final year engineering student at NIT Kurukshetra with a passion for
            clean UI and interactive web experiences. I’ve built full-stack MERN projects, Chrome
            extensions, and contributed to real-world React applications during internships.
          </p>
          <p>
            Currently exploring the intersection of frontend aesthetics and performance. 
            Scroll down to see what I’ve built!
          </p>
          <p className="text-[#00BFFF] font-semibold text-lg sm:text-xl">
  Fullstack Developer • MERN Expert • UI Enthusiast • API Builder • Cloud Learner
</p>

        </div>
      </div>
    </div>
  );
};

export default About;
