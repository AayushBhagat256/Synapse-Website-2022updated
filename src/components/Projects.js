import React from 'react'
import { useState, useEffect } from 'react';
import './Projects.css'
import { FaRegFilePdf } from 'react-icons/fa';
import Project2 from './Project2';
function Projects() {
  const [displayProjects, setProjects] = useState([]);
  const fetchApi = () => {
    fetch("https://synapseop.pythonanywhere.com/projects/")
      .then((data) => {
        console.log(data)
        return data.json();
      })
      .then((objectData) => {
        console.log(objectData)
        console.log(objectData.payload)
        setProjects(objectData.payload)
      })
  }

  useEffect(
    () => {
      fetchApi();
    }, []
  )
  return (
    <>
      <div className='all'>
        <h1 className='ptitle'><b>Projects</b></h1>
        {displayProjects.map((project) => (
          <div class="Project-cards" >
            <div class="Project-Body">
              <h5 class="projects-title0">{project.title}</h5>
              {/* <h5 class="projects-title1">{project.project_no}</h5> */}
              <h5 class="projects-title2">{project.field}</h5>
              <p class="card-text">{project.description}</p>
              <a href={project.link} class="btn1"  ><FaRegFilePdf/>Open PDF</a>
            </div>
          </div>
        ))}
      </div>
      <Project2/>
    </>


  )
}

export default Projects