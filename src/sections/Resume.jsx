import React from 'react'
import './Resume.css'
import { FaFileDownload } from "react-icons/fa";

const Resume = () => {
  return (<>
    <hr />
    <div className="resume">
      <h1>Resume</h1>
      <div className="resume_inner"><div className="resume_left">
      Access my resume for a comprehensive view of my academic qualifications, technical skills,
       work experience, and project contributions. Click the icon to view or download the document.
      </div>
      <div className="resume_right">
        <button className='resume_btn'>
          <div className="btn_image"><FaFileDownload /></div>
        </button>
      </div></div>
    </div></>
  )
}

export default Resume