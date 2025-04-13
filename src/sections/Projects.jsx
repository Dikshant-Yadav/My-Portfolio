import React, { useState } from 'react';
import './Projects.css';
import { GiNextButton, GiPreviousButton } from "react-icons/gi";
import img1 from '../assets/project1.jpg';
import img2 from '../assets/project22.jpg';

const list = [
  
  { 
    img: img2, 
    desc:"This is a blogging website where users can share and explore blogs across various categories. It features user authentication, a rich-text editor for writing blogs, and full CRUD functionality. The platform offers a smooth and responsive user experience, making it easy to navigate and manage blog content. Built using the MERN stack, it ensures both powerful backend operations and an interactive frontend interface."
    // desc: "My blogging site is a personal platform where I share insights, tutorials, and experiences related to web development, programming, and tech trends. Built with a focus on clean UI and responsive design, the blog allows readers to explore content seamlessly across devices.", 
    ,tech: ['Html', 'CSS', 'Javascript','Express','Node.js','MongoDb','React'] 
  }
,  {
  img: img1,
  desc: "These projects showcase my hands-on experience with front-end and full-stack development. From simple web pages to interactive apps, every project taught me something new.These projects showcase my hands-on experience with front-end and full-stack development. From simple web pages to interactive apps, every project taught me something new.These projects showcase my hands-on experience with front-end and full-stack development. From simple web pages to interactive apps, every project taught me something new.These projects showcase my hands-on experience with front-end and full-stack development. From simple web pages to interactive apps, every project taught me something new.",
  tech: ['Html', 'CSS', 'Javascript','React']
},
  { img: img1, desc: "this is my 3 project", tech: ['html', 'css', 'javascript'] },
];

const Projects = () => {
  const [index, setindex] = useState(0);

  const handleprev = () => {
    setindex(prev => (prev > 0 ? prev - 1 : prev));
  };

  const handlenext = () => {
    setindex(next => (next < list.length - 1 ? next + 1 : next));
  };

  const item = list[index];

  return (
    <div className="main">
      <h3>Projects</h3>
      <div className="project">
        <div className="project_inner" key={index}>
          <div className="project_top">
            <img src={item.img} alt="this is img" />
          </div>
          <div className="project_bottom">
            <div className="project_bottom2">
              TechStack:
              {item.tech.map((techItem, index) => (
                <div className="tech" key={index}>{techItem}</div>
              ))}
            </div>
              {item.desc}
          </div>
        </div>
        <div className="remote">
          <button className="left" onClick={handleprev} disabled={index === 0}>
            <GiPreviousButton />
          </button>
          <button className="right" onClick={handlenext} disabled={index === list.length - 1}>
            <GiNextButton />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
