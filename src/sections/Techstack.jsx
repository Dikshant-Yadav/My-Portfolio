import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb, SiExpress } from "react-icons/si";
import "./Techstack.css";
import { FaProjectDiagram } from "react-icons/fa";


const techItems = [
  { icon: <FaHtml5 />, title: "HTML5", description: "Markup language for structuring web content." },
  { icon: <FaCss3Alt />, title: "CSS3", description: "Styling web pages beautifully." },
  { icon: <IoLogoJavascript />, title: "JavaScript", description: "Programming language for dynamic behavior." },
  { icon: <FaReact />, title: "React", description: "JS library for building interactive UIs." },
  { icon: <SiExpress />, title: "Express.js", description: "Backend framework for building APIs." },
  { icon: <FaNodeJs />, title: "Node.js", description: "JavaScript runtime for backend services." },
  { icon: <SiMongodb />, title: "MongoDB", description: "NoSQL database for storing data in JSON format." },
  { icon: <FaProjectDiagram/>, title: "DSA", description: "Strong grip on data structures and algorithms." },
];

const Techstack = () => {
  return (
    <section className="techstack" id="techstack">
      <div className="techstack_inner">
      <h2 className="techstack-title">Tech Stack</h2>
      <div className="techstack-grid">
        {techItems.map((item, index) => (
          <div className={`tech-card ts${index}`} key={index}>
            <div className="tech-icon">{item.icon}</div>
            <div className="tech-title">{item.title}</div>
            <div className="tech-description">{item.description}</div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Techstack;
