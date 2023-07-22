import { useState } from 'react'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Core from './Pages/coreMembers/Core'
import Excore from './Pages/exCoreMembers/Excore'
import Faculty from './Pages/facultyMembers/Faculty'
import Contact from './Pages/contactForm/Contact'
import Loader from './Components/Loader/Loader'
import Nav from './Components/Navigation/Nav'
import UpcomingEventcard from './Components/UpcomingEventcard'
import Footer from './Components/Footer'
import Timeline from './Pages/EventsTimeline/Timeline'
import Projects from './Pages/Projects/ResearchPaper'
// import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<>
            <Nav/>
            <UpcomingEventcard/>
          </>}/>
        </Routes>
        <Routes>
          <Route path='/nav' element={<Nav/>}/>
        </Routes>
        <Routes>
          <Route path='/core' element={<Core/>}/>
        </Routes>
        <Routes>
          <Route path='/excore' element={<Excore/>}/>
        </Routes>
        <Routes>
          <Route path='/fac' element={<Faculty/>}/>
        </Routes>
        <Routes>
          <Route path='/project' element={<Projects/>}/>
        </Routes>
        <Routes>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Routes>
          <Route path='/load' element={<Loader/>}/>
        </Routes>
        <Routes>
          <Route path='/footer' element={<Footer/>}/>
        </Routes>
        <Routes>
          <Route path='/timeline' element={<Timeline/>}/>
        </Routes>
      </Router>
      {/* <UpcomingEventcard/> */}
      {/* <Footer/> */}
      
    </>
  )
}

export default App
