import React from 'react'
import './Footer.css'
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn  } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer >
      <div className="siuu">
        <h3 class="tagline">Teaching Machines to Learn</h3>
        <ul class="icons">
            <li><a href="https://github.com/Synapse-DJSCE" ><FaGithub/></a></li>
            <li><a href="https://www.linkedin.com/company/djs-synapse/" ><FaLinkedinIn/></a></li>
            <li><a href="https://www.instagram.com/synapse.djsce/" ><FaInstagram/></a></li>
        </ul>
        <div class="contact">
            <p>Want to get in touch with us? Send a <a href="/contactus"><b>Message</b></a></p>
        </div>
        <ul class="menu">
            <li><a href="/">About us</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/timeline">Events</a></li>
        </ul>
        </div>
    </footer>
  )
}

export default Footer
