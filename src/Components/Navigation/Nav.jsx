import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/synapselogo.png'

function Nav() {
    return (
        <div>
            <div className='cuscolor '>
                <nav class="navbar navbar-expand-lg  bg-transparent">
                    <div class="container-fluid">
                        <Link class="navbar-brand" to="/">
                            <img src={Logo} alt="Logo" width="80" height="80" class="d-inline-block align-text-top" />
                        </Link>
                        <button class="navbar-toggler black-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <Link class="nav-link active mx-2" aria-current="page" to="/"><b className='nav'>Home</b></Link>
                                </li>
                                
                                <li class="nav-item dropdown">
                                    <Link class="nav-link active dropdown-toggle" to="#" id='drop' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <b style={{marginLeft:"4px"}}>  Team</b>
                                    </Link>
                                    <ul class="dropdown-menu dropdown-menu-light bg-light">
                                        <li><Link class="dropdown-item" to="/fac">Faculty</Link></li>
                                        {/* <li><Link class="dropdown-item" to="/excore">Founders</Link></li> */}
                                        <li><Link class="dropdown-item" to="/core">Core</Link></li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link active mx-2" to="/project"><b className='nav' >Projects</b></Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link active mx-2" aria-current="page" to="/timeline"><b className='nav'>Events</b></Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link active mx-2" aria-current="page" to="/contact"><b className='nav'>Contact Us</b></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Nav
