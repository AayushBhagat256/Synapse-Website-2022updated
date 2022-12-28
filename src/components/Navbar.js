import React from 'react'
import Logo from './nobgsynapses.png'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='cuscolor '>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark bg-transparent">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            <img src={Logo} alt="Logo" width="80" height="80" class="d-inline-block align-text-top" />
            {/* <span class="navbar-brand mb-1 h1"> Synapse</span> */}
          </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active mx-2" aria-current="page" to="/"><b className='nav'>Home</b></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active mx-2" to="/project"><b className='nav' >Projects</b></Link>
              </li>
              <li class="nav-item dropdown">
              <Link class="nav-link active dropdown-toggle" to="#" id='drop' role="button" data-bs-toggle="dropdown" aria-expanded="false">
               <b>DropDown</b>
          </Link>
          <ul class="dropdown-menu dropdown-menu-light bg-light">
            <li><Link class="dropdown-item" to="/faculty">Faculty</Link></li>
            <li><Link class="dropdown-item" to="/excore">Founders</Link></li>
            <li><Link class="dropdown-item" to="/core">Core</Link></li>
          </ul>
        </li>
              <li class="nav-item">
                <Link class="nav-link active mx-2" aria-current="page" to="/timeline"><b className='nav'>Events</b></Link>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link active mx-2" aria-current="page" to="/"><b className='nav'>Resources</b></a>
              </li> */}
              <li class="nav-item">
                <Link class="nav-link active mx-2" aria-current="page" to="/contactus"><b className='nav'>Contact Us</b></Link>
              </li>
              
              {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" to="#">Action</a></li>
            <li><a class="dropdown-item" to="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" to="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li> */}
            </ul>
            {/* <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
