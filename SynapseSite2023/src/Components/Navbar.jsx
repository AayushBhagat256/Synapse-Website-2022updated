import React, { useState } from 'react'
import './Navbar.css'
import logo from './synapselogo.png';
import { LuAlignJustify } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';

function Navbar() {
  const[Mobile , setMobile] = useState(false)
  return(
      <>
      <nav className='navbar'>
          <div className='container'> 
          <img src={logo} alt='logo' className='logo'></img>
          <ul className = {Mobile ? 'mobilelinks':'links'} onClick={()=> setMobile(!Mobile)}>
              <a>Home</a>
              <a>Team</a>
              <a>Projects</a>
              <a>Events</a>
              <Link to='/contact'>Contact us</Link>  
              {/* plz dont do anything in this link (from ~Aayush) */}
          </ul>
          <button className='hamburgericon' onClick={()=> setMobile(!Mobile)}>
              { Mobile? <RxCross2/> : <LuAlignJustify/>}
          </button>
          </div>
      </nav>
      </>
  )
}
export default Navbar;
