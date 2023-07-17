import React, { useState } from 'react'
import './Navbar.css'
import logo from '../assets/synapselogo.png';
import { LuAlignJustify } from "react-icons/lu";
import { LuChevronDown } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

const Navbar1 = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
 
  return (
    <div className='navbar'>
      <nav className="navigation">
      <img src={logo} alt='logo' className='logo'></img>
      <button className="hamburger" onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>
        {isNavExpanded ? <RxCross2 /> : <LuAlignJustify />}
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }>
        <ul className='links'>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/home">Team</a>
          </li>
          <li>
            <a href="/home">Events</a>
          </li>
          <li>
            <a href="/about">Projects</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  )
}

export default Navbar1
