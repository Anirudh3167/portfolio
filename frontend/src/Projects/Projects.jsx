// import React, { useState } from 'react'

import './Projects.css'

import Navbar from '../Components/Navbar/Navbar'
import LoadingContainer from '../lib/ui/LoadingContainer';

function Projects() {
  // const [projects,setProjects] = useState();
  const projects = [];
  return (
    <div className='ProjectsMainWrapper'>
        <LoadingContainer name="Projects" />
        <Navbar />
        <div className="ProjectsMainContainer">
            <div className="ProjectsTopNavbar">
              <div className="ProjectsTagsContainer">
                <div className="ProjectsTagItem ActiveProjectTag"> All </div>
                <div className="ProjectsTagItem"> Web Developement </div>
                <div className="ProjectsTagItem"> OpenCV </div>
              </div>
              <div className="ProjectsSearchContainer">
                <input type="text" className='InputBox' placeholder='Search Here.' />
              </div>
            </div>
            <div className="ProjectsContainer" style={projects ? {} : {justifyContent:"center",fontSize:"24px",fontWeight:"700"}}>
              {
                projects?.length > 0 ? "You have some projects here."
                : "Projects are currently in building stage"
              }
            </div>
        </div>

    </div>
  )
}

export default Projects