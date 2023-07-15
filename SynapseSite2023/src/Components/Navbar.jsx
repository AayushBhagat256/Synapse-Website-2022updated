import React, { useState } from 'react'
import './Navbar.css'
import logo from './synapselogo.png';
import { LuAlignJustify } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';

function Navbar() {
    const [Open, setOpen] = useState(false)
    const [Mobile, setMobile] = useState(false)
    return (
        <>
            <nav className='navbar'>
                <div className='container'>
                    <img src={logo} alt='logo' className='logo'></img>
                    <ul className={Mobile ? 'mobilelinks' : 'links'} >
                        <li>Home</li>
                        <li onClick={() => setOpen(!Open)}> Teams
                            {
                                Open && (
                                    <div className='dropdowndiv'>
                                        <ul className='dropdown'>
                                            <li><a href="/fac"> Faculty</a> </li>
                                            <li><a href="/core">Core</a> </li>
                                            <li><a href="/excore">Founders</a></li>
                                        </ul>
                                    </div>
                                )
                            }
                        </li>
                        <li>Projects</li>
                        <li>Events</li>
                        <li><a href="/contact">Contact Us</a></li>
                        {/* <Link to='/contact'>Contact us</Link>   */}
                        {/* plz dont do anything in this link (from ~Aayush) */}
                    </ul>
                    <button className='hamburgericon' onClick={() => setMobile(!Mobile)}>
                        {Mobile ? <RxCross2 /> : <LuAlignJustify />}
                    </button>
                </div>
            </nav>
        </>
    )
}
export default Navbar;
