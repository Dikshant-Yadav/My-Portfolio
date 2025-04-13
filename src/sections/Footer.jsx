import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdEmail, MdLocationPin } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="astro-footer">
      <div className="footer-overlay">
        <div className="footer-columns">
          {/* Left - Intro (top aligned) */}
          <div className="footer-column left">
            <h3>Dikshant .</h3>
            <p>
              Crafting digital experiences<br />
              with clean code, creativity & a<br />
              spark of curiosity.<br />
              Thanks for scrolling this far!
            </p>
            <div className="footer-socials">
              <a href="https://github.com/Dikshant-Yadav" target="_blank"><FaGithub /></a>
              <a href="https://linkedin.com/in/dikshant-yadav-9bb898291" target="_blank"><FaLinkedin /></a>
              <a href="https://twitter.com/" target="_blank"><FaTwitter /></a>
            </div>
          </div>

          {/* Middle - Quick Links (center aligned) */}
          <div className="footer-column middle">
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          {/* Right - Contact (bottom aligned) */}
          <div className="footer-column right">
            <h3>Get in Touch</h3>
            <p><MdEmail /> yadvadikshant22@gmail.com</p>
            <p><MdLocationPin /> Kurukshetra, Haryana, India</p>
          </div>
        </div>

        <div className="footer-bottom">
          © 2025 Dikshant | Portfolio. All rights reserved.
          <br />
          <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
