// src/components/Loader.jsx
import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <h1 className="loader-text">Dikshant's Portfolio</h1>
      {/* <h1>Loading</h1> */}
      <div className="progress-bar">
        <div className="progress" />
      </div>
    </div>
  );
};

export default Loader;
