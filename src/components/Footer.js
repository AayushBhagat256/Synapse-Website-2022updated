import React from 'react'
import './Footer.css'
import { FaGithub } from 'react-icons/fa';
import { BsLinkedin  } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
        <h3 class="tagline">Teaching Machines to Learn</h3>
        <ul class="icons">
            <li><a href="https://github.com/Synapse-DJSCE" target="_blank"><FaGithub/></a></li>
            <li><a href="https://www.linkedin.com/company/djs-synapse/" target="_blank"><BsLinkedin/></a></li>
            <li><a href="https://www.instagram.com/synapse.djsce/" target="_blank"><FaInstagram/></a></li>
        </ul>
        <div class="contact">
            <p>Want to get in touch with us? Send a <a href="#"><b>Message</b></a></p>
        </div>
        <ul class="menu">
            <li><a href="#">About us</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Events</a></li>
        </ul>
    </footer>
  )
}

export default Footer
