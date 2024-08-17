import React, { useState } from 'react'
import './Projects.css'

import Navbar from '../../Components/Navbar/Navbar'
import LoadingContainer from '../../lib/ui/LoadingContainer';

import { projects } from '../../lib/constants'
import { Link } from 'react-router-dom';

function Projects() {
  const [selectionOption, setSelectionOption] = useState('All');
  const selectionOptions = ['All', 'Web Developement', 'OpenCV'];

  const [projectsInDisplay, setProjectsInDisplay] = useState(projects);
  const [search, setSearch] = useState('');
  const handleSearch = (event) => {
    let val = event.target.value??'';
    if (val === '') setProjectsInDisplay(projects);
    else setProjectsInDisplay(projects.filter((project) => 
      project.toLowerCase().includes(val.toLowerCase())));
    setSearch(val);
  }
  return (
    <div className='ProjectsMainWrapper'>
        <LoadingContainer name="Projects" />
        <Navbar />
        <div className="ProjectsMainContainer">
            <div className="ProjectsTopNavbar">
              {/* Project Tags */}
              <div className="ProjectsTagsContainer">
                {selectionOptions.map((option) => (
                  <div className={`ProjectsTagItem ${selectionOption === option ? 'ActiveProjectTag' : ''}`}
                  key={option} onClick={() => setSelectionOption(option)}>
                    {option}
                  </div>
                ))}
              </div>
              <div className="ProjectsSearchContainer">
                <input type="text" className='InputBox' placeholder='Search Here.' onChange={(e)=>{handleSearch(e)}} value={search} />
              </div>
            </div>
            <div className="ProjectsContainer" style={projects ? {} : {justifyContent:"center",fontSize:"24px",fontWeight:"700"}}>
              {projectsInDisplay.map((project) => (
                <Link to={`/projects`} className="ProjectItem" key={project}>
                  {project}
                </Link>
              ))}
            </div>
        </div>

    </div>
  )
}

export default Projects