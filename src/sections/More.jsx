import React from 'react'
import './Resume.css'
import { FaFileDownload } from "react-icons/fa";

const More = () => {
  return (<>
    <hr />
        <div className="resume">
          <h1>Some More Info</h1>
          <div className="resume_inner"><div className="resume_left">
          hey
          </div>
          <div className="resume_right">
            <button className='resume_btn'>
              <div className="btn_image"><FaFileDownload /></div>
            </button>
          </div></div>
        </div></>
  )
}

export default More