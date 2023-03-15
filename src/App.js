import './App.css';
import Contact from './components/Contact';
import Faculty from './components/Faculty';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Core from './components/Core';
import Aboutus from './components/Aboutus';
import Excore from './components/Excore';
import Projects from './components/Projects';
import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import {
  BrowserRouter as Router,
  //Switch,
  Route,
  // Link,
  Routes
} from "react-router-dom";
import Upcomingevents from './components/Upcomingevents';
import Timeline from './components/Timeline';
import Project2 from './components/Project2';
//import Upcoming from './components/Upcoming';

function App() {
  return (
    <Router>
       <ChakraProvider>
      <>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path='/contactus' element={<Contact />} />
          </Routes>
          <div className='fragmentss'>

            <div className="Aboutus">
              {/* <Navbar /> */}
              <Routes>
                <Route path='/' element={<Aboutus />} />
              </Routes>


            </div>

            <div className="facultyy">
              <Routes>
                <Route path='/faculty' element={<Faculty />} />
              </Routes>

            </div>
            <div className="excoree">
              <Routes>
                <Route path='/excore' element={<Excore />} />
              </Routes>

            </div>
            <div className="coree">
            <Routes>
            <Route path='/core' element={<Core />} />
          </Routes>
          
              
            </div>
            
            <div className="projects">
            <Routes>
            {/* <Route path='/project' element={<Projects />} /> */}
            <Route path='/project' element={<Project2/>}/>
          </Routes>

              
              <div className='upevents'>
              <Routes>
                <Route path='/' element={<Upcomingevents />} />
              </Routes>
              </div>
              
              
              <div className='events'>
                <Routes>
                  <Route path='/timeline' element={<Timeline />} />
                </Routes>

              </div>
            </div>
            


            <div className="footer">
              <Footer />
            </div>

          </div>

        </div>




      </>
      </ChakraProvider>
    </Router>
  )
}

export default App