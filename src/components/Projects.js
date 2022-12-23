import React from 'react'
import { useState, useEffect } from 'react';
import './Projects.css'
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
        {displayProjects.map((project) => (
          <div class="Project-cards" >
            <div class="Project-Body">
              <h5 class="card-title">{project.title}</h5>
              <h5 class="card-title1">{project.project_no}</h5>
              <h5 class="card-title2">{project.field}</h5>
              <p class="card-text">{project.description}</p>
              <a href={project.link} class="btn1">OPEN PDF</a>
            </div>
          </div>
        ))}
      </div>
    </>


  )
}

export default Projects